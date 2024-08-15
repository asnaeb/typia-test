import typia from "typia";
import {MyType} from "@/module";
import {MyType2} from "src/module2";

// First type MyType imported with tsconfig paths -> import {MyType} from "@/module";
typia.assert<MyType>(null);

// Second type imported with baseUrl path -> import {MyType2} from "src/module2";
typia.assert<MyType2>(null);
