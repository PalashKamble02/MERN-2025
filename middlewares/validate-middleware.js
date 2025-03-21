// await schema.parseAsync(req.body) is the line where you use Zod to validate the reqest 
// body data against the defined schema.

//https://github.com/colinhacks/zod#parseasync

// '.parse(data : unknown): T'

//Given any Zod schema, you can call its '.parse' method to check 'data' is valid or not . If it 
// is , a value is returned with full type informational otherwise, an error is thrown .

// '.parseAsync(data:unkown):Promise<T>

// If you use Asynchronous [refinements](https://github.com/colinhacks/zod#refine) or 
// [transforms](https://github.com/colinhacks/zod#transform) (more on those later), you will 
// need to use '.parseAsync'.

const validate = (schema) => async (req, res, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const message = err.errors[0].message;
        console.log(message);
        res.status(400).json({msg:message});
    }
};

module.exports = validate;