import { Bignum } from "@blockpool-io/crypto";

export function bignumify(value) {
    return new Bignum(value);
}
