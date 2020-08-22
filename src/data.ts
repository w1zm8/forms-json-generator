export const signInFormData = JSON.stringify({
  items: [
    {
      type: "string",
      label: "Username",
      props: {
        id: "username",
        placeholder: "Enter username",
      },
    },
    {
      type: "string",
      label: "Password",
      props: {
        type: "password",
        id: "password",
        placeholder: "Enter password",
      },
    },
  ],
  controls: [
    {
      label: "Forgot password",
      props: {
        variant: "light",
      },
    },
    {
      label: "Sign In",
      props: {
        variant: "primary",
      },
    },
  ],
});

export const signUpFormData = JSON.stringify({
  items: [
    {
      type: "string",
      label: "Email",
      props: {
        id: "email",
        placeholder: "Enter email",
        value: "somenewuser@gmail.com",
      },
    },
    {
      type: "string",
      label: "Username",
      props: {
        id: "username",
        placeholder: "Enter username",
        value: "somenewuser",
      },
    },
    {
      type: "string",
      label: "Password",
      props: {
        type: "password",
        id: "password",
        placeholder: "Enter password",
      },
    },
    {
      type: "string",
      label: "Repeat password",
      props: {
        type: "password",
        id: "repeatPassword",
        placeholder: "Repeat password",
      },
    },
    {
      type: "boolean",
      label: "I accept the Terms of Service",
      props: {
        id: "agreement",
      },
    },
  ],
  controls: [
    {
      label: "Create account",
      props: {
        variant: "primary",
      },
    },
  ],
});

export const createPostFormData = JSON.stringify({
  title: "Create new post",
  items: [
    {
      label: "Title",
      type: "string",
      props: {
        id: "title",
        placeholder: "Enter post title",
      },
    },
    {
      label: "Description",
      type: "text",
      props: {
        id: "description",
        placeholder: "Enter post description",
      },
    },
    {
      label: "Content",
      type: "text",
      props: {
        id: "content",
        placeholder: "Enter post contet",
        rows: 5,
      },
    },
    {
      label: "Public",
      type: "radio",
      props: {
        id: "access",
        name: "access",
        checked: true,
      },
    },
    {
      label: "Private",
      type: "radio",
      props: {
        id: "access",
        name: "access",
      },
    },
  ],
  controls: [
    {
      label: "Create post",
      props: {
        variant: "primary",
      },
    },
  ],
});
