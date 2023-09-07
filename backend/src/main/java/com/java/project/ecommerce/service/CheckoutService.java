package com.java.project.ecommerce.service;

import com.java.project.ecommerce.dto.Purchase;
import com.java.project.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
