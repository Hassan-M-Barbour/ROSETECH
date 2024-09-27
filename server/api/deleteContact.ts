
export default defineEventHandler(async(event) => {
     const requestBody = await readBody(event);
     //console.log(requestBody)
     
     const db = useDatabase("myDatabase");
     let id = requestBody.id;
     const result = await db.sql`DELETE  FROM Contact WHERE id = ${id}`;
        return result.rows;
     
     });
     
     
     
     
     