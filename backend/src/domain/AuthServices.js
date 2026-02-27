import env from "dotenv/config";

class AuthServices {
  constructor({
    areCredentialsValid,
    authRepository,
    compareHash,
    hashPassword,
    jwt,
  }) {
    this.authRepository = authRepository;
    this.hashPassword = hashPassword;
    this.compareHash = compareHash;
    this.areCredentialsValid = areCredentialsValid;
    this.jwt = jwt;
  }

  async login(credentials) {
    this.areCredentialsValid(credentials);
    const user = await this.fetchUser(credentials.userName);
    await this.isPasswordCorrect(credentials.password, user.password_hash);

    return this.createToken(user);
  }

  async fetchUser(userName) {
    const user = await this.authRepository.fetchUser(userName, userName);

    return user;
  }

  async isPasswordCorrect(userPassword, dbHash) {
    const match = await this.compareHash(userPassword, dbHash);
    if (!match) {
      throw new Error(
        "AuthServices: error logging in , passwords do not match!",
      );
    }
  }
  createToken(user) {
    const token = this.jwt.sign(
      { userId: user.id, userName: user.userName },
      process.env.JWT_SECRET,
      { expiresIn: "1hr" },
    );
    return token;
  }
}

export default AuthServices;
