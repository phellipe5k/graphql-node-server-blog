const graphqlFields = require('graphql-fields');

export const performaticConsult = (info) => {
    const fields = graphqlFields(info)
    const fields_array = Object.keys(fields)
        .map(field => ({ [field]: 1 }));
    let consult = {};
    fields_array.forEach(e => {
        consult = { ...consult, ...e }
    })
    return consult;
}