<script setup lang="ts">
import UiChildCard from '~/components/shared/UiChildCard.vue';

// const { status, signOut } = useAuth()

// const LoggenIn = computed(() => status.value === "authenticated")

// async function handlesignOut(){
//   await signOut()
// }
// const contacts = ref(null);
// const contact = ref(null);
// const email = ref(null);
// const emp = ref(null);
// const editedUser = ref({
//   id:null,
//   name:null,
//   email:null
// })
// contacts.value = await getContact();
// console.log(contacts.value);
// Get contacts

const contacts = ref<any>({});
  contacts.value = await $fetch("/api/listContacts");
// async function getContact() {
//   return await $fetch("/api/listContacts");
// }

// // Add contacts
// async function addUser(user, email) {
//   console.log(user);
// let useradd=null
//   if (user)
//     useradd= await $fetch("/api/user", {
//       method: "POST",
//       body: {
//         name: user,
//         email: email,
//       },
//     });
//   users.value=await getUsers()
// }

// Delete contacts
async function deleteContact(id) {
   if( confirm('Are you sure?') ){
  let contact=null
  if (id)
 
  contact= await $fetch("/api/deleteContact", {
      method: "POST",
      body: {
        id: id,
      },
    });
    if(id) contacts.value= await  $fetch("/api/listContacts");
   }
}

// // Update contacts
// async function editUser(editedUser) {
// let user=null

//   if (editedUser.id && editedUser.name && editedUser.email)
//    user=  await $fetch("/api/user", {
//       method: "PUT",
//       body: {
//         id:editedUser.id,
//         name: editedUser.name,
//         email: editedUser.email,
//       },
//     });
//     if(editedUser) users.value=await getUsers()
// }

definePageMeta({
  
  layout: 'dashboard',
  middleware: ["hanko-logged-in"]
 // middleware : ['auth']
})

// function useAuth(): { status: any; signOut: any; } {
//   throw new Error('Function not implemented.');
// }


</script>



<template>
<v-row class="month-table">
        <v-col cols="12" sm="12" > 
             <UiChildCard title="Contacts Table">
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">id</th>
                            <th class="text-left">Name</th>
                            <th class="text-left">Email</th>
                            <th class="text-left">Subject</th>
                            <th class="text-left">Phone</th>
                            <th class="text-left">Message</th>
                            <th class="text-left">Employee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(contacts, index) in contacts.results">
                            <th scope="row">{{ index + 1 }}</th>
          <td>{{ contacts.name }}</td>
          <td>{{ contacts.email }}</td>
          <td>{{ contacts.subject }}</td>
          <td>{{ contacts.phone }}</td>
          <td>{{ contacts.message }}</td>
          <td>{{ contacts.emp }}</td>
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="($event) =>    deleteContact(contacts.id)"
            >
              Delete
            </button>
          </td>
                        </tr>
                    </tbody>
                </v-table>
<!-- <h1>This ia ROSETECH DASHBOARD !</h1> 

<button v-if="LoggenIn" @click="handlesignOut">Sign Out</button>-->
            </UiChildCard>
        </v-col>
</v-row>
</template>