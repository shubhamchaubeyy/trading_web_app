package com.tradefolio.request;

public class ResetPasswordRequest {

	private String otp;
	
	private String password;

	public ResetPasswordRequest() {
		super();
	}

	public String getOtp() {
		return otp;
	}

	public void setOtp(String otp) {
		this.otp = otp;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
}
