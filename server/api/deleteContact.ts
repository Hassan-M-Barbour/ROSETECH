
export default defineEventHandler(async(event) => {
     const requestBody = await readBody(event);
     //console.log(requestBody)
     
     const db = useDatabase("myDatabase");
     
     const result = await db.sql`DELETE  FROM Contact WHERE id = ${requestBody.id}`;
        return result.rows;
     
     });
     
     
     
     
     