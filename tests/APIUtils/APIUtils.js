class APIUtils {
    constructor(apicontext, registerUserPayload) {
        this.apicontext = apicontext;
        this.registerUserPayload = registerUserPayload;
    }

    async getemail() {
        const response = await this.apicontext.post(
            "https://api.eventhub.rahulshettyacademy.com/api/auth/register",
            {
                data: this.registerUserPayload
            }
        );

        console.log("Status:", response.status());

        const responseBody = await response.json();
        console.log("Registration response:", responseBody);

        if (!response.ok()) {
            throw new Error(
                `Registration failed: ${response.status()}`
            );
        }

        const email = responseBody.user;

        if (!email) {
            throw new Error("Email not found in registration response");
        }

        console.log("Registered email:", email);
        return email;
    }
}

module.exports = APIUtils;