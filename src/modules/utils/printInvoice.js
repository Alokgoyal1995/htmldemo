import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

export default function(order) {
  const {
    payment_status,
    delivery_type,
    customer_name,
    customer_mobile,
    order_no,
    created_at,
    extras,
    total_amount,
    order_items,
    status,
    amount_breakup,
    address_uuid,
    address,
    from_address
  } = order
  var dateTime = moment(created_at).format("MM/DD/YYYY");
  console.log('order in print', order)


  return `<html>
  <title>::Preview::</title>
  <link rel="stylesheet" href="/css/bootstrap.min.css">
  <link rel="stylesheet" href="/css/AdminLTE.css">
  <link rel="stylesheet" href="/css/print.css">
  </head>
  <body onload="window.print();">
  <div class="wrapper">
    <!-- Main content -->
    <section class="invoice">
      <!-- title row -->
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" class="head_wrapper">
          <h2 class="page-header">
            <i class="fa fa-globe"></i> Blackjack Pizza & Salads.
          </h2>
          <div class="row invoice_no">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span class="pull-left">Invoice: #007612</span>
              <span class="pull-right">Date: ${dateTime}</span>
            </div>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- info row -->
      <div class="row invoice-info">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 invoice-col">
          From
          <address>
            <strong>Blackjack Pizza & Salads</strong><br>
            28245 S Tamiami Trail, <br>
            #130 Bonita Springs FL 34134, <br>
            Phone: 239-495-3422<br>
          </address>
        </div>
        <!-- /.col -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 invoice-col">
          To
          <address>
            <strong>${customer_name}</strong><br>
            ${address !== null && address !== undefined ? address : ""}<br>
            Phone: ${customer_mobile}<br>
          </address>
        </div>
        <!-- /.col -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 invoice-col">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span class="pull-left"><b>Order No.:</b></span>
              <span class="pull-right">#${order_no}</span>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span class="pull-left"><b>Delivery Type:</b></span>
              <span class="pull-right">${delivery_type}</span>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span class="pull-left"><b>Payment Status:</b></span>
              <span class="pull-right">${payment_status}</span>
            </div>
          </div>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <!-- Table row -->
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 table-responsive">

            ${order_items.map((item,index) =>
            `
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>item</th>
                    <th>price</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <td><span>${item.quantity}</span> ${item.name}<br/>${item.customizations.map((custom,cindex) => `<span class="added-ing-label" key={cindex}>${custom.name} </span><br/>`).join('')} </td>
                  <td>$${item.price}</td>
                </tr>
                </tbody>
              </table>
            `
           ).join('')}


        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <div class="row">
        <!-- accepted payments column -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

        </div>
        <!-- /.col -->
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 discount">
          <div class="table-responsive">
            <table class="table">
              <tr>
                <th style="width:50%">SubTotal:</th>
                <td>$${amount_breakup.gross_amount}</td>
              </tr>
              <tr>
                <th>Tax</th>
                <td>$${amount_breakup.tax_calculated}</td>
              </tr>
              <tr>
                <th>Discount Rate:</th>
                <td>${amount_breakup.discount_rate}%</td>
              </tr>
              <tr>
                <th>Tips:</th>
                <td>$${amount_breakup.tip}</td>
              </tr>
              <tr>
                <th>Delivery Charged:</th>
                <td>$${amount_breakup.delivery_charges}</td>
              </tr>
              <tr>
                <th>Total:</th>
                <td>$${total_amount}</td>
              </tr>
            </table>
          </div>
        </div>
        <!-- /.col -->

      </div>
      <!-- /.row -->
      <div class="row invoice_no">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <span class="pull-left">Invoice: #007612</span>
          <span class="pull-right">Date: ${dateTime}</span>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- ./wrapper --></body></html>`
}
