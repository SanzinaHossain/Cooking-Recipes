import { Controller, useForm } from "react-hook-form"
import { StyleSheet, Text, TextInput, View } from "react-native"
import MoleButton from "../../components/Molecules/MoleButton"
import { appColor, ScreenName } from "../../components/Constant"
import { useNavigation } from "@react-navigation/native"
import LoginHooks from "../../Hooks/LoginHooks"

export default function RegistrationForm() {
  const { handleSubmit, control, errors, handleRegistration } = LoginHooks()
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputField}
            placeholder="Name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name?.type === "required" && (
        <Text style={styles.errorText}>Name is required</Text>
      )}

      <Controller
        control={control}
        rules={{
          required: "Email is required",
          pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputField}
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email?.type === "required" && (
        <Text style={styles.errorText}>Email is required</Text>
      )}
      {errors.email?.type === "pattern" && (
        <Text style={styles.errorText}>Invalid Email Pattern</Text>
      )}

      <Controller
        control={control}
        rules={{
          minLength: 6,
          required: "Password is required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="Password"
            style={styles.inputField}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {errors.password?.type === "required" && (
        <Text style={styles.errorText}>Password is required</Text>
      )}
      {errors.password?.type === "minLength" && (
        <Text style={styles.errorText}>Minimum password length 6</Text>
      )}

      <MoleButton
        customStyle={styles.button}
        handleClick={handleSubmit(handleRegistration)}
        title="Sign Up"
      />
      <Text>Already Have An Account?</Text>
      <MoleButton
        customStyle={styles.createAccountButton}
        title="Login "
        handleClick={() => navigation.navigate(ScreenName.LOGIN)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  inputField: {
    padding: 10,
    borderRadius: 10,
    borderColor: appColor.PRIMARY,
    borderWidth: 1,
    width: "90%",
    color: "black",
    fontSize: 10,
    marginVertical: 10,
    fontSize: 15,
  },
  button: {
    width: "90%",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: appColor.PRIMARY,
  },
  errorText: {
    color: "red",
    fontSize: 15,
    alignItems: "start",
  },
  createAccountButton: {
    width: "90%",
    backgroundColor: appColor.SECONDARY,
    borderRadius: 10,
    marginVertical: 10,
    color: appColor.WHITE,
  },
})
