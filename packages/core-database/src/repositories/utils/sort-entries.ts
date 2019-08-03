import { orderBy } from "@arkecosystem/utils";
import { Database } from "@blockpool-io/core-interfaces";

export const sortEntries = (params: Database.IParameters, entries: any[], defaultValue) => {
    const [iteratee, order] = params.orderBy ? params.orderBy : defaultValue;

    if (["balance", "voteBalance"].includes(iteratee)) {
        return Object.values(entries).sort((a: any, b: any) => {
            return order === "asc" ? a[iteratee].comparedTo(b[iteratee]) : b[iteratee].comparedTo(a[iteratee]);
        });
    }

    return orderBy(entries, [iteratee], [order as "desc" | "asc"]);
};
