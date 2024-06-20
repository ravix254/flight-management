import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { FlightController } from "../flight.controller";
import { FlightService } from "../flight.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  approvalComments: "exampleApprovalComments",
  approvalStatus: "true",
  arrivalAirport: "exampleArrivalAirport",
  arrivalTime: new Date(),
  associatedPilot: "exampleAssociatedPilot",
  createdAt: new Date(),
  departureAirport: "exampleDepartureAirport",
  departureTime: new Date(),
  flightNumber: "exampleFlightNumber",
  id: "exampleId",
  remark: "exampleRemark",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  approvalComments: "exampleApprovalComments",
  approvalStatus: "true",
  arrivalAirport: "exampleArrivalAirport",
  arrivalTime: new Date(),
  associatedPilot: "exampleAssociatedPilot",
  createdAt: new Date(),
  departureAirport: "exampleDepartureAirport",
  departureTime: new Date(),
  flightNumber: "exampleFlightNumber",
  id: "exampleId",
  remark: "exampleRemark",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    approvalComments: "exampleApprovalComments",
    approvalStatus: "true",
    arrivalAirport: "exampleArrivalAirport",
    arrivalTime: new Date(),
    associatedPilot: "exampleAssociatedPilot",
    createdAt: new Date(),
    departureAirport: "exampleDepartureAirport",
    departureTime: new Date(),
    flightNumber: "exampleFlightNumber",
    id: "exampleId",
    remark: "exampleRemark",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  approvalComments: "exampleApprovalComments",
  approvalStatus: "true",
  arrivalAirport: "exampleArrivalAirport",
  arrivalTime: new Date(),
  associatedPilot: "exampleAssociatedPilot",
  createdAt: new Date(),
  departureAirport: "exampleDepartureAirport",
  departureTime: new Date(),
  flightNumber: "exampleFlightNumber",
  id: "exampleId",
  remark: "exampleRemark",
  updatedAt: new Date(),
};

const service = {
  createFlight() {
    return CREATE_RESULT;
  },
  flights: () => FIND_MANY_RESULT,
  flight: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Flight", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: FlightService,
          useValue: service,
        },
      ],
      controllers: [FlightController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /flights", async () => {
    await request(app.getHttpServer())
      .post("/flights")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        arrivalTime: CREATE_RESULT.arrivalTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        departureTime: CREATE_RESULT.departureTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /flights", async () => {
    await request(app.getHttpServer())
      .get("/flights")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          arrivalTime: FIND_MANY_RESULT[0].arrivalTime.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          departureTime: FIND_MANY_RESULT[0].departureTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /flights/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/flights"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /flights/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/flights"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        arrivalTime: FIND_ONE_RESULT.arrivalTime.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        departureTime: FIND_ONE_RESULT.departureTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /flights existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/flights")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        arrivalTime: CREATE_RESULT.arrivalTime.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        departureTime: CREATE_RESULT.departureTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/flights")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
