package com.iiht.training.auction.exceptions;

public class SkillNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public SkillNotFoundException() {
		super();
	}

	public SkillNotFoundException(String message) {
		super(message);
	}

}
