<script setup lang="ts">
const InputName = ref('');
const InputEmail = ref('');
const InputSubject = ref('');
const InputPhone = ref('');
const InputMessage = ref('');
const InputEmployee = ref('');


function submit(){
    $fetch("/api/addContact",{
        method : "POST",
        body:{
            name : InputName.value,
            email : InputEmail.value,
            Subject: InputSubject.value,
            phone:InputPhone.value,
            message: InputMessage.value,
            employee : InputEmployee.value
        }
    })
}


</script>

<template>
    <div>
        <input v-model="InputName" type="text" placeholder="Name"><br>
        <input v-model="InputEmail" type="text" placeholder="Email"><br>
        <input v-model="InputSubject" type="text" placeholder="Subject"><br>
        <input v-model="InputPhone" type="text" placeholder="Phone"><br>
        <input v-model="InputMessage" type="text" placeholder="Message"><br>
        <input v-model="InputEmployee" type="text" placeholder="Employee"><br>
       <button @click="submit">Insert</button>
    </div>
</template>