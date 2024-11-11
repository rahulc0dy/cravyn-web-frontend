class Restaurant {
  constructor(
    id,
    name,
    registrationNo,
    ownerId,
    latitude,
    longitude,
    city,
    street,
    landmark,
    pinCode,
    availabilityStatus,
    licenseUrl,
    verifyStatus,
    gstinNo,
    accountNo,
    ifscCode,
    bankName,
    branchCity,
    password,
    refreshToken
  ) {
    this.id = id;
    this.name = name;
    this.registrationNo = registrationNo;
    this.ownerId = ownerId;
    this.address = {
      latitude: latitude,
      longitude: longitude,
      city: city,
      street: street,
      landmark: landmark,
      pinCode: pinCode,
    };
    this.availabilityStatus = availabilityStatus;
    this.licenseUrl = licenseUrl;
    this.verifyStatus = verifyStatus;
    this.gstinNo = gstinNo;
    this.bank = {
      accountNo: accountNo,
      ifscCode: ifscCode,
      name: bankName,
      city: branchCity,
    };
    this.password = password;
    this.refreshToken = refreshToken;
  }
}

export default Restaurant;
