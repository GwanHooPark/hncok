<template>
    <form ref="form" @submit.prevent="sendEmail">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send" />
    </form>
</template>

<script>
export default {
    created() {
        console.log('created22');
        console.log(process.env);
    },
};
</script>

<style></style>
