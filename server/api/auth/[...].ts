//import GithubProvider from 'next-auth/providers/github'
import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'



export default NuxtAuthHandler({
  secret: useRuntimeConfig().authSecret,

  pages : {
    signIn : '/login'
  },
  providers: [
   
    // GithubProvider.default({
    //   clientId: 'Ov23lio2uPVbIUgCNW29',
    //   clientSecret: 'adceb1d986e05163218b0e8bee9ff0cbd7dafa60'
    // }),

    CredentialsProvider.default({
        name: 'Credentials',
        authorize(credentials: any) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
  
          const user = {
            email: 'test@email.com',
            password: 'pass',
          }
          const seconduser = {
            email: 'axel@email.com',
            password: 'axel',
          }
  
          if ((
            credentials?.email === user.email &&
            credentials?.password === user.password
          ) || credentials?.email === seconduser.email && credentials?.password === seconduser.password )
          
          {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // eslint-disable-next-line no-console

           
            console.error(
              'Warning: Malicious login attempt registered, bad credentials provided'
            )
  
            // If you return null then an error will be displayed advising the user to check their details.
            return null
  
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        },
      }),
  ]
})