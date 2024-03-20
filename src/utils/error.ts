
function isObject(o: any) {
    return o instanceof Object && o.constructor === Object;
}

const findErrorMessage = (entity: any): string => {
    const errorMessage = "Something went wrong";

    if (!entity) {
        return errorMessage;
    } else if (isObject(entity)) {
        const firstKey = Object.keys?.(entity)?.[0];
        const firstElement = entity?.[firstKey];

        return findErrorMessage(firstElement);
    } else if (Array.isArray(entity)) {
        return findErrorMessage(entity?.[0]);
    } else if (typeof entity === "string") {
        return entity;
    } else {
        return errorMessage;
    }
};

export const errorMessageParser = (e: Error | unknown) => {
    let errorMessage = "Something went wrong";

    //    if directly errorMessage is sent to us
    if (typeof e === "string") {
        return e;
    }
    return errorMessage;
};
