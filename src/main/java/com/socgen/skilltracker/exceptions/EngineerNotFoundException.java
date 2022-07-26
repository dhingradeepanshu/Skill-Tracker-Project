package com.iiht.training.auction.exceptions;

public class EngineerNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public EngineerNotFoundException() {
		super();
	}

	public EngineerNotFoundException(String message) {
		super(message);
	}

}
