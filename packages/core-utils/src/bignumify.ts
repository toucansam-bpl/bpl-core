import { Bignum } from "@toucansam-bpl/crypto";

export function bignumify(value) {
    return new Bignum(value);
}
