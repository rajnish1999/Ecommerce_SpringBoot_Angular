package com.java.project.ecommerce.dto;

import com.java.project.ecommerce.Entity.Address;
import com.java.project.ecommerce.Entity.Customer;
import com.java.project.ecommerce.Entity.Order;
import com.java.project.ecommerce.Entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;

    private Address shippingAddress;

    private Address billingAddress;

    private Order order;

    private Set<OrderItem> orderItems;
}
