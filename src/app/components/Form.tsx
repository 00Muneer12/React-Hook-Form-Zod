import { useForm } from "react-hook-form";
import { FormData } from "../types";
import FormField from "./FormField";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError, // Now used properly
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Custom validation: Ensure yearsOfExperience is between 1 and 10
    if (data.yearsOfExperience < 1 || data.yearsOfExperience > 10) {
      setError("yearsOfExperience", {
        type: "manual",
        message: "Experience must be between 1 and 10 years",
      });
      return;
    }

    console.log("SUCCESS", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid col-auto">
        <h1 className="text-3xl font-bold mb-4">Zod & React-Hook-Form</h1>

        <FormField
          type="email"
          placeholder="Email"
          name="email"
          register={register}
          error={errors.email}
        />

        <FormField
          type="text"
          placeholder="GitHub URL"
          name="githubUrl"
          register={register}
          error={errors.githubUrl}
        />

        <FormField
          type="number"
          placeholder="Years of Experience (1 - 10)"
          name="yearsOfExperience"
          register={register}
          error={errors.yearsOfExperience}
          valueAsNumber
        />

        <FormField
          type="password"
          placeholder="Password"
          name="password"
          register={register}
          error={errors.password}
        />

        <FormField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword}
        />

        {errors.yearsOfExperience && (
          <p className="text-red-500">{errors.yearsOfExperience.message}</p>
        )}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
