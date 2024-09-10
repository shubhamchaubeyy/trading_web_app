package com.tradefolio.service;

import com.razorpay.RazorpayException;
import com.stripe.exception.StripeException;
import com.tradefolio.domain.PaymentMethod;
import com.tradefolio.model.PaymentOrder;
import com.tradefolio.model.User;
import com.tradefolio.response.PaymentResponse;

public interface PaymentService {

	PaymentOrder createOrder(User user, Long amount, PaymentMethod paymentMethod);

	PaymentOrder getPaymentOrderById(Long id) throws Exception;

	Boolean proceedPaymentOrder(PaymentOrder paymentOrder, String paymentId) throws RazorpayException;

	PaymentResponse createRazorPayPaymentLink(User user, Long amount) throws RazorpayException;

	PaymentResponse createStripePaymentLink(User user, Long amount, Long orderId) throws StripeException;

}
