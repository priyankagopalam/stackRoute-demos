import { NodeSDK } from "@opentelemetry/sdk-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { NestInstrumentation } from "@opentelemetry/instrumentation-nestjs-core";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const sdk = new NodeSDK({
    resource: resourceFromAttributes({
        [ATTR_SERVICE_NAME]: 'MongoDBApp'
    }),
    traceExporter: new OTLPTraceExporter({
        url: 'http://localhost:4318/v1/traces'
    }),
    instrumentations:[
        new HttpInstrumentation(),
        new NestInstrumentation()
    ]
});

sdk.start();