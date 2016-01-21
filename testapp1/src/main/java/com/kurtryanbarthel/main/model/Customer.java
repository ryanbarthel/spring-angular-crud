package com.kurtryanbarthel.main.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;





@Entity
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)	
	private Integer id;
	
	@Column
	private String name;
	
	@Column
	private String telephone;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="addressID")
	private Address address;
	
	public Customer() {}
	
	public Customer(String name, String telephone, Address address) {
		this.name = name;
		this.telephone = telephone;
		this.address = address;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return String.format("Customer [id=%s, name=%s, telephone=%s, address=%s]", id, name, telephone, address);
	}
	

}
