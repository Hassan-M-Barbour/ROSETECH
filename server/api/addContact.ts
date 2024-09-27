
export default defineEventHandler(async(event) => {
const requestBody = await readBody(event);
//console.log(requestBody)

const db = useDatabase("myDatabase");

const result = await db.sql`INSERT INTO Contact (name,email, subject , phone , message , emp) VALUES (${requestBody.name},${requestBody.email},${requestBody.subject},${requestBody.phone},${requestBody.message},${requestBody.emp})`;
   return result;

});




