#!/bin/bash

mkdir -p ./src/zod

bun ts-to-zod ./src/types/StardexFactory.types.ts ./src/zod/StardexFactorySchemas.ts
bun ts-to-zod ./src/types/StardexStakeNative.types.ts ./src/zod/StardexStakeNativeSchemas.ts