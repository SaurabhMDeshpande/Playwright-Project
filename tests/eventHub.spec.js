
const { test, expect, request } = require('@playwright/test');
const APIUtils = require('./APIUtils/APIUtils');

const registerUserPayload = {
    email: "saurabh221aaa@gmail.com",
    password: "secret123"
};

let apicontext;
let email;

test.beforeAll(async () => {
    apicontext = await request.newContext();

    const apiUtils = new APIUtils(
        apicontext,
        registerUserPayload
    );

    email = await apiUtils.getemail();

    console.log("Email in beforeAll:", email);
});

test.afterAll(async () => {
    await apicontext.dispose();
});

test('@API Place the order', async ({ page }) => {
    console.log("Email in test:", email);

 
});
