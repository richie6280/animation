import { animate, group, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const fadeInOut = trigger('fadeInOut', [
  // state('fadeIn', style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10'})),
  // state('fadeOut', style({ opacity: 0, transform: 'translateY(-200px)', zIndex: '-1'})),
  // transition('fadeIn => fadeOut', [animate('.5s ease')]),
  // transition('fadeOut => fadeIn', [animate('.5s ease')]),

  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-500px)', zIndex: '-1' }),
    animate('.5s ease', style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10' })),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10' }),
    animate('.5s ease', style({ opacity: 0, transform: 'translateY(-500px)', zIndex: '-1' }))
  ]),


  // transition(':increment', [
  //   // query(':enter', [
  //     style({ opacity: 0, transform: 'translateY(-200px)', zIndex: '-1' }),
  //     // stagger(50, [
  //     //   animate('.5s ease', style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10' })),
  //     // ]),
  //   // ], { optional: true })
  // ]),
  // transition(':decrement', [
  //   // query(':leave', [
  //     style({ opacity: 1, transform: 'translateY(0px)', zIndex: '10' }),
  //     // stagger(50, [
  //     //   animate('.5s ease', style({ opacity: 0, transform: 'translateY(-200px)', zIndex: '-1' })),
  //     // ]),
  //   // ], { optional: true }),
  // ]),

])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOut]
})

export class AppComponent {
  title = 'animation';

  // public isShown: boolean = false;
  // public pageNumber: number = 1;
  // public lastPage: number = 5;

  // public pages = [
  //   { id: 1 },
  //   { id: 2 },
  //   { id: 3 },
  //   { id: 4 },
  //   { id: 5 }
  // ]

  public step: number = 1;
  public lastPage: number = 3;

  // fadeInOut() {
  //   this.isShown = !this.isShown;
  // }

  // nextPage() {
  //   if (this.pageNumber === this.lastPage) return;
  //   this.pageNumber += 1;
  // }

  // previousPage() {
  //   if (this.pageNumber === 1) return;
  //   this.pageNumber -= 1;
  // }

  // ngOnInit() {
  //   this.getStepCondition(this.step);
  // }

  isStep1: boolean = true;
  isStep2: boolean = false;
  isStep3: boolean = false;

  nextPage() {
    if (this.step === this.lastPage) return;
    this.step += 1;
    this.getStepCondition(this.step);
  }

  previousPage() {
    if (this.step === 1) return;
    this.step -= 1;
    this.getStepCondition(this.step);
  }

  getStepCondition(step: number): void {
    step === 1 ? this.isStep1 = true : this.isStep1 = false;
    step === 2 ? this.isStep2 = true : this.isStep2 = false;
    step === 3 ? this.isStep3 = true : this.isStep3 = false;
  }




  constructor(private http: HttpClient) { }

  arr = [
    [
      {
        "base_currency_code": "TWD",
        "base_discount_amount": 0,
        "base_discount_canceled": 0,
        "base_grand_total": 500,
        "base_discount_tax_compensation_amount": 0,
        "base_shipping_amount": 1,
        "base_shipping_canceled": 1,
        "base_shipping_discount_amount": 0,
        "base_shipping_discount_tax_compensation_amnt": 0,
        "base_shipping_incl_tax": 1,
        "base_shipping_tax_amount": 0,
        "base_subtotal": 499,
        "base_subtotal_canceled": 499,
        "base_subtotal_incl_tax": 499,
        "base_tax_amount": 0,
        "base_tax_canceled": 0,
        "base_total_canceled": 500,
        "base_total_due": 500,
        "base_to_global_rate": 1,
        "base_to_order_rate": 1,
        "billing_address_id": 294,
        "created_at": "2023-07-07 07:30:15",
        "customer_email": "richie@aiii.ai",
        "customer_firstname": "開發人員 開發人員",
        "customer_is_guest": 1,
        "customer_lastname": "開發人員 開發人員",
        "customer_note_notify": 1,
        "discount_amount": 0,
        "discount_canceled": 0,
        "email_sent": 1,
        "entity_id": 148,
        "global_currency_code": "TWD",
        "grand_total": 500,
        "discount_tax_compensation_amount": 0,
        "increment_id": "000000144",
        "is_virtual": 0,
        "order_currency_code": "TWD",
        "protect_code": "0be877ebde9832999acc421c053dddd8",
        "quote_id": 389,
        "remote_ip": "61.216.8.131",
        "shipping_amount": 1,
        "shipping_canceled": 1,
        "shipping_description": "宅配到府 - 運費",
        "shipping_discount_amount": 0,
        "shipping_discount_tax_compensation_amount": 0,
        "shipping_incl_tax": 1,
        "shipping_tax_amount": 0,
        "state": "canceled",
        "status": "canceled",
        "store_currency_code": "TWD",
        "store_id": 1,
        "store_name": "Main Website\n台灣微軟授權線上商店\n繁體中文",
        "store_to_base_rate": 0,
        "store_to_order_rate": 0,
        "subtotal": 499,
        "subtotal_canceled": 499,
        "subtotal_incl_tax": 499,
        "tax_amount": 0,
        "tax_canceled": 0,
        "total_canceled": 500,
        "total_due": 500,
        "total_item_count": 1,
        "total_qty_ordered": 1,
        "updated_at": "2023-07-08 08:00:04",
        "weight": 0,
        "items": [
          {
            "amount_refunded": 0,
            "base_amount_refunded": 0,
            "base_discount_amount": 0,
            "base_discount_invoiced": 0,
            "base_discount_tax_compensation_amount": 0,
            "base_original_price": 499,
            "base_price": 499,
            "base_price_incl_tax": 499,
            "base_row_invoiced": 0,
            "base_row_total": 499,
            "base_row_total_incl_tax": 499,
            "base_tax_amount": 0,
            "base_tax_invoiced": 0,
            "created_at": "2023-07-07 07:30:15",
            "discount_amount": 0,
            "discount_invoiced": 0,
            "discount_percent": 0,
            "free_shipping": 0,
            "discount_tax_compensation_amount": 0,
            "discount_tax_compensation_canceled": 0,
            "is_qty_decimal": 0,
            "is_virtual": 0,
            "item_id": 272,
            "name": "無線行動滑鼠1850 - 桃花粉",
            "no_discount": 0,
            "order_id": 148,
            "original_price": 499,
            "price": 499,
            "price_incl_tax": 499,
            "product_id": 225,
            "product_type": "simple",
            "qty_canceled": 1,
            "qty_invoiced": 0,
            "qty_ordered": 1,
            "qty_refunded": 0,
            "qty_returned": 0,
            "qty_shipped": 0,
            "quote_item_id": 720,
            "row_invoiced": 0,
            "row_total": 499,
            "row_total_incl_tax": 499,
            "row_weight": 0,
            "sku": "4411.HW566.503-1",
            "store_id": 1,
            "tax_amount": 0,
            "tax_canceled": 0,
            "tax_invoiced": 0,
            "tax_percent": 0,
            "updated_at": "2023-07-08 08:00:04"
          }
        ],
        "billing_address": {
          "address_type": "billing",
          "city": "臺北市",
          "country_id": "TW",
          "email": "richie@aiii.ai",
          "entity_id": 294,
          "firstname": "開發人員 開發人員",
          "lastname": "開發人員 開發人員",
          "parent_id": 148,
          "postcode": "100",
          "region": "中正區",
          "region_code": "中正區",
          "street": [
            "test"
          ],
          "telephone": "0900000000"
        },
        "payment": {
          "account_status": null,
          "additional_information": [
            null
          ],
          "amount_ordered": 500,
          "base_amount_ordered": 500,
          "base_shipping_amount": 1,
          "cc_exp_year": "0",
          "cc_last4": null,
          "cc_ss_start_month": "0",
          "cc_ss_start_year": "0",
          "entity_id": 148,
          "method": "newebpay",
          "parent_id": 148,
          "shipping_amount": 1
        },
        "status_histories": [
          {
            "comment": "付款類型 : NewebPay",
            "created_at": "2023-07-07 07:30:19",
            "entity_id": 628,
            "entity_name": "order",
            "is_customer_notified": null,
            "is_visible_on_front": 1,
            "parent_id": 148,
            "status": "pending_payment"
          },
          {
            "comment": null,
            "created_at": "2023-07-07 07:30:15",
            "entity_id": 627,
            "entity_name": "order",
            "is_customer_notified": 1,
            "is_visible_on_front": 0,
            "parent_id": 148,
            "status": "pending_payment"
          }
        ],
        "extension_attributes": {
          "shipping_assignments": [
            {
              "shipping": {
                "address": {
                  "address_type": "shipping",
                  "city": "臺北市",
                  "country_id": "TW",
                  "email": "richie@aiii.ai",
                  "entity_id": 293,
                  "firstname": "開發人員 開發人員",
                  "lastname": "開發人員 開發人員",
                  "parent_id": 148,
                  "postcode": "100",
                  "region": "中正區",
                  "region_code": "中正區",
                  "street": [
                    "test"
                  ],
                  "telephone": "0900000000"
                },
                "method": "flatrate_flatrate",
                "total": {
                  "base_shipping_amount": 1,
                  "base_shipping_canceled": 1,
                  "base_shipping_discount_amount": 0,
                  "base_shipping_discount_tax_compensation_amnt": 0,
                  "base_shipping_incl_tax": 1,
                  "base_shipping_tax_amount": 0,
                  "shipping_amount": 1,
                  "shipping_canceled": 1,
                  "shipping_discount_amount": 0,
                  "shipping_discount_tax_compensation_amount": 0,
                  "shipping_incl_tax": 1,
                  "shipping_tax_amount": 0
                }
              },
              "items": [
                {
                  "amount_refunded": 0,
                  "base_amount_refunded": 0,
                  "base_discount_amount": 0,
                  "base_discount_invoiced": 0,
                  "base_discount_tax_compensation_amount": 0,
                  "base_original_price": 499,
                  "base_price": 499,
                  "base_price_incl_tax": 499,
                  "base_row_invoiced": 0,
                  "base_row_total": 499,
                  "base_row_total_incl_tax": 499,
                  "base_tax_amount": 0,
                  "base_tax_invoiced": 0,
                  "created_at": "2023-07-07 07:30:15",
                  "discount_amount": 0,
                  "discount_invoiced": 0,
                  "discount_percent": 0,
                  "free_shipping": 0,
                  "discount_tax_compensation_amount": 0,
                  "discount_tax_compensation_canceled": 0,
                  "is_qty_decimal": 0,
                  "is_virtual": 0,
                  "item_id": 272,
                  "name": "無線行動滑鼠1850 - 桃花粉",
                  "no_discount": 0,
                  "order_id": 148,
                  "original_price": 499,
                  "price": 499,
                  "price_incl_tax": 499,
                  "product_id": 225,
                  "product_type": "simple",
                  "qty_canceled": 1,
                  "qty_invoiced": 0,
                  "qty_ordered": 1,
                  "qty_refunded": 0,
                  "qty_returned": 0,
                  "qty_shipped": 0,
                  "quote_item_id": 720,
                  "row_invoiced": 0,
                  "row_total": 499,
                  "row_total_incl_tax": 499,
                  "row_weight": 0,
                  "sku": "4411.HW566.503-1",
                  "store_id": 1,
                  "tax_amount": 0,
                  "tax_canceled": 0,
                  "tax_invoiced": 0,
                  "tax_percent": 0,
                  "updated_at": "2023-07-08 08:00:04"
                }
              ]
            }
          ],
          "payment_additional_info": [
            {
              "key": "method_title",
              "value": "null"
            }
          ],
          "applied_taxes": [],
          "item_applied_taxes": []
        }
      },
      {
        "base_currency_code": "TWD",
        "base_discount_amount": 0,
        "base_discount_canceled": 0,
        "base_grand_total": 500,
        "base_discount_tax_compensation_amount": 0,
        "base_shipping_amount": 1,
        "base_shipping_canceled": 1,
        "base_shipping_discount_amount": 0,
        "base_shipping_discount_tax_compensation_amnt": 0,
        "base_shipping_incl_tax": 1,
        "base_shipping_tax_amount": 0,
        "base_subtotal": 499,
        "base_subtotal_canceled": 499,
        "base_subtotal_incl_tax": 499,
        "base_tax_amount": 0,
        "base_tax_canceled": 0,
        "base_total_canceled": 500,
        "base_total_due": 500,
        "base_to_global_rate": 1,
        "base_to_order_rate": 1,
        "billing_address_id": 294,
        "created_at": "2023-07-07 07:30:15",
        "customer_email": "richie@aiii.ai",
        "customer_firstname": "開發人員 開發人員",
        "customer_is_guest": 1,
        "customer_lastname": "開發人員 開發人員",
        "customer_note_notify": 1,
        "discount_amount": 0,
        "discount_canceled": 0,
        "email_sent": 1,
        "entity_id": 148,
        "global_currency_code": "TWD",
        "grand_total": 500,
        "discount_tax_compensation_amount": 0,
        "increment_id": "000000144",
        "is_virtual": 0,
        "order_currency_code": "TWD",
        "protect_code": "0be877ebde9832999acc421c053dddd8",
        "quote_id": 389,
        "remote_ip": "61.216.8.131",
        "shipping_amount": 1,
        "shipping_canceled": 1,
        "shipping_description": "宅配到府 - 運費",
        "shipping_discount_amount": 0,
        "shipping_discount_tax_compensation_amount": 0,
        "shipping_incl_tax": 1,
        "shipping_tax_amount": 0,
        "state": "canceled",
        "status": "canceled",
        "store_currency_code": "TWD",
        "store_id": 1,
        "store_name": "Main Website\n台灣微軟授權線上商店\n繁體中文",
        "store_to_base_rate": 0,
        "store_to_order_rate": 0,
        "subtotal": 499,
        "subtotal_canceled": 499,
        "subtotal_incl_tax": 499,
        "tax_amount": 0,
        "tax_canceled": 0,
        "total_canceled": 500,
        "total_due": 500,
        "total_item_count": 1,
        "total_qty_ordered": 1,
        "updated_at": "2023-07-08 08:00:04",
        "weight": 0,
        "items": [
          {
            "amount_refunded": 0,
            "base_amount_refunded": 0,
            "base_discount_amount": 0,
            "base_discount_invoiced": 0,
            "base_discount_tax_compensation_amount": 0,
            "base_original_price": 499,
            "base_price": 499,
            "base_price_incl_tax": 499,
            "base_row_invoiced": 0,
            "base_row_total": 499,
            "base_row_total_incl_tax": 499,
            "base_tax_amount": 0,
            "base_tax_invoiced": 0,
            "created_at": "2023-07-07 07:30:15",
            "discount_amount": 0,
            "discount_invoiced": 0,
            "discount_percent": 0,
            "free_shipping": 0,
            "discount_tax_compensation_amount": 0,
            "discount_tax_compensation_canceled": 0,
            "is_qty_decimal": 0,
            "is_virtual": 0,
            "item_id": 272,
            "name": "無線行動滑鼠1850 - 桃花粉",
            "no_discount": 0,
            "order_id": 148,
            "original_price": 499,
            "price": 499,
            "price_incl_tax": 499,
            "product_id": 225,
            "product_type": "simple",
            "qty_canceled": 1,
            "qty_invoiced": 0,
            "qty_ordered": 1,
            "qty_refunded": 0,
            "qty_returned": 0,
            "qty_shipped": 0,
            "quote_item_id": 720,
            "row_invoiced": 0,
            "row_total": 499,
            "row_total_incl_tax": 499,
            "row_weight": 0,
            "sku": "4411.HW566.503-1",
            "store_id": 1,
            "tax_amount": 0,
            "tax_canceled": 0,
            "tax_invoiced": 0,
            "tax_percent": 0,
            "updated_at": "2023-07-08 08:00:04"
          }
        ],
        "billing_address": {
          "address_type": "billing",
          "city": "臺北市",
          "country_id": "TW",
          "email": "richie@aiii.ai",
          "entity_id": 294,
          "firstname": "開發人員 開發人員",
          "lastname": "開發人員 開發人員",
          "parent_id": 148,
          "postcode": "100",
          "region": "中正區",
          "region_code": "中正區",
          "street": [
            "test"
          ],
          "telephone": "0900000000"
        },
        "payment": {
          "account_status": null,
          "additional_information": [
            null
          ],
          "amount_ordered": 500,
          "base_amount_ordered": 500,
          "base_shipping_amount": 1,
          "cc_exp_year": "0",
          "cc_last4": null,
          "cc_ss_start_month": "0",
          "cc_ss_start_year": "0",
          "entity_id": 148,
          "method": "newebpay",
          "parent_id": 148,
          "shipping_amount": 1
        },
        "status_histories": [
          {
            "comment": "付款類型 : NewebPay",
            "created_at": "2023-07-07 07:30:19",
            "entity_id": 628,
            "entity_name": "order",
            "is_customer_notified": null,
            "is_visible_on_front": 1,
            "parent_id": 148,
            "status": "pending_payment"
          },
          {
            "comment": null,
            "created_at": "2023-07-07 07:30:15",
            "entity_id": 627,
            "entity_name": "order",
            "is_customer_notified": 1,
            "is_visible_on_front": 0,
            "parent_id": 148,
            "status": "pending_payment"
          }
        ],
        "extension_attributes": {
          "shipping_assignments": [
            {
              "shipping": {
                "address": {
                  "address_type": "shipping",
                  "city": "臺北市",
                  "country_id": "TW",
                  "email": "richie@aiii.ai",
                  "entity_id": 293,
                  "firstname": "開發人員 開發人員",
                  "lastname": "開發人員 開發人員",
                  "parent_id": 148,
                  "postcode": "100",
                  "region": "中正區",
                  "region_code": "中正區",
                  "street": [
                    "test"
                  ],
                  "telephone": "0900000000"
                },
                "method": "flatrate_flatrate",
                "total": {
                  "base_shipping_amount": 1,
                  "base_shipping_canceled": 1,
                  "base_shipping_discount_amount": 0,
                  "base_shipping_discount_tax_compensation_amnt": 0,
                  "base_shipping_incl_tax": 1,
                  "base_shipping_tax_amount": 0,
                  "shipping_amount": 1,
                  "shipping_canceled": 1,
                  "shipping_discount_amount": 0,
                  "shipping_discount_tax_compensation_amount": 0,
                  "shipping_incl_tax": 1,
                  "shipping_tax_amount": 0
                }
              },
              "items": [
                {
                  "amount_refunded": 0,
                  "base_amount_refunded": 0,
                  "base_discount_amount": 0,
                  "base_discount_invoiced": 0,
                  "base_discount_tax_compensation_amount": 0,
                  "base_original_price": 499,
                  "base_price": 499,
                  "base_price_incl_tax": 499,
                  "base_row_invoiced": 0,
                  "base_row_total": 499,
                  "base_row_total_incl_tax": 499,
                  "base_tax_amount": 0,
                  "base_tax_invoiced": 0,
                  "created_at": "2023-07-07 07:30:15",
                  "discount_amount": 0,
                  "discount_invoiced": 0,
                  "discount_percent": 0,
                  "free_shipping": 0,
                  "discount_tax_compensation_amount": 0,
                  "discount_tax_compensation_canceled": 0,
                  "is_qty_decimal": 0,
                  "is_virtual": 0,
                  "item_id": 272,
                  "name": "無線行動滑鼠1850 - 桃花粉",
                  "no_discount": 0,
                  "order_id": 148,
                  "original_price": 499,
                  "price": 499,
                  "price_incl_tax": 499,
                  "product_id": 225,
                  "product_type": "simple",
                  "qty_canceled": 1,
                  "qty_invoiced": 0,
                  "qty_ordered": 1,
                  "qty_refunded": 0,
                  "qty_returned": 0,
                  "qty_shipped": 0,
                  "quote_item_id": 720,
                  "row_invoiced": 0,
                  "row_total": 499,
                  "row_total_incl_tax": 499,
                  "row_weight": 0,
                  "sku": "4411.HW566.503-1",
                  "store_id": 1,
                  "tax_amount": 0,
                  "tax_canceled": 0,
                  "tax_invoiced": 0,
                  "tax_percent": 0,
                  "updated_at": "2023-07-08 08:00:04"
                }
              ]
            }
          ],
          "payment_additional_info": [
            {
              "key": "method_title",
              "value": "null"
            }
          ],
          "applied_taxes": [],
          "item_applied_taxes": []
        }
      }
    ],
    [
      {
        "base_currency_code": "TWD",
        "base_discount_amount": 0,
        "base_discount_canceled": 0,
        "base_grand_total": 500,
        "base_discount_tax_compensation_amount": 0,
        "base_shipping_amount": 1,
        "base_shipping_canceled": 1,
        "base_shipping_discount_amount": 0,
        "base_shipping_discount_tax_compensation_amnt": 0,
        "base_shipping_incl_tax": 1,
        "base_shipping_tax_amount": 0,
        "base_subtotal": 499,
        "base_subtotal_canceled": 499,
        "base_subtotal_incl_tax": 499,
        "base_tax_amount": 0,
        "base_tax_canceled": 0,
        "base_total_canceled": 500,
        "base_total_due": 500,
        "base_to_global_rate": 1,
        "base_to_order_rate": 1,
        "billing_address_id": 294,
        "created_at": "2023-07-07 07:30:15",
        "customer_email": "richie@aiii.ai",
        "customer_firstname": "開發人員 開發人員",
        "customer_is_guest": 1,
        "customer_lastname": "開發人員 開發人員",
        "customer_note_notify": 1,
        "discount_amount": 0,
        "discount_canceled": 0,
        "email_sent": 1,
        "entity_id": 148,
        "global_currency_code": "TWD",
        "grand_total": 500,
        "discount_tax_compensation_amount": 0,
        "increment_id": "000000144",
        "is_virtual": 0,
        "order_currency_code": "TWD",
        "protect_code": "0be877ebde9832999acc421c053dddd8",
        "quote_id": 389,
        "remote_ip": "61.216.8.131",
        "shipping_amount": 1,
        "shipping_canceled": 1,
        "shipping_description": "宅配到府 - 運費",
        "shipping_discount_amount": 0,
        "shipping_discount_tax_compensation_amount": 0,
        "shipping_incl_tax": 1,
        "shipping_tax_amount": 0,
        "state": "canceled",
        "status": "canceled",
        "store_currency_code": "TWD",
        "store_id": 1,
        "store_name": "Main Website\n台灣微軟授權線上商店\n繁體中文",
        "store_to_base_rate": 0,
        "store_to_order_rate": 0,
        "subtotal": 499,
        "subtotal_canceled": 499,
        "subtotal_incl_tax": 499,
        "tax_amount": 0,
        "tax_canceled": 0,
        "total_canceled": 500,
        "total_due": 500,
        "total_item_count": 1,
        "total_qty_ordered": 1,
        "updated_at": "2023-07-08 08:00:04",
        "weight": 0,
        "items": [
          {
            "amount_refunded": 0,
            "base_amount_refunded": 0,
            "base_discount_amount": 0,
            "base_discount_invoiced": 0,
            "base_discount_tax_compensation_amount": 0,
            "base_original_price": 499,
            "base_price": 499,
            "base_price_incl_tax": 499,
            "base_row_invoiced": 0,
            "base_row_total": 499,
            "base_row_total_incl_tax": 499,
            "base_tax_amount": 0,
            "base_tax_invoiced": 0,
            "created_at": "2023-07-07 07:30:15",
            "discount_amount": 0,
            "discount_invoiced": 0,
            "discount_percent": 0,
            "free_shipping": 0,
            "discount_tax_compensation_amount": 0,
            "discount_tax_compensation_canceled": 0,
            "is_qty_decimal": 0,
            "is_virtual": 0,
            "item_id": 272,
            "name": "無線行動滑鼠1850 - 桃花粉",
            "no_discount": 0,
            "order_id": 148,
            "original_price": 499,
            "price": 499,
            "price_incl_tax": 499,
            "product_id": 225,
            "product_type": "simple",
            "qty_canceled": 1,
            "qty_invoiced": 0,
            "qty_ordered": 1,
            "qty_refunded": 0,
            "qty_returned": 0,
            "qty_shipped": 0,
            "quote_item_id": 720,
            "row_invoiced": 0,
            "row_total": 499,
            "row_total_incl_tax": 499,
            "row_weight": 0,
            "sku": "4411.HW566.503-1",
            "store_id": 1,
            "tax_amount": 0,
            "tax_canceled": 0,
            "tax_invoiced": 0,
            "tax_percent": 0,
            "updated_at": "2023-07-08 08:00:04"
          }
        ],
        "billing_address": {
          "address_type": "billing",
          "city": "臺北市",
          "country_id": "TW",
          "email": "richie@aiii.ai",
          "entity_id": 294,
          "firstname": "開發人員 開發人員",
          "lastname": "開發人員 開發人員",
          "parent_id": 148,
          "postcode": "100",
          "region": "中正區",
          "region_code": "中正區",
          "street": [
            "test"
          ],
          "telephone": "0900000000"
        },
        "payment": {
          "account_status": null,
          "additional_information": [
            null
          ],
          "amount_ordered": 500,
          "base_amount_ordered": 500,
          "base_shipping_amount": 1,
          "cc_exp_year": "0",
          "cc_last4": null,
          "cc_ss_start_month": "0",
          "cc_ss_start_year": "0",
          "entity_id": 148,
          "method": "newebpay",
          "parent_id": 148,
          "shipping_amount": 1
        },
        "status_histories": [
          {
            "comment": "付款類型 : NewebPay",
            "created_at": "2023-07-07 07:30:19",
            "entity_id": 628,
            "entity_name": "order",
            "is_customer_notified": null,
            "is_visible_on_front": 1,
            "parent_id": 148,
            "status": "pending_payment"
          },
          {
            "comment": null,
            "created_at": "2023-07-07 07:30:15",
            "entity_id": 627,
            "entity_name": "order",
            "is_customer_notified": 1,
            "is_visible_on_front": 0,
            "parent_id": 148,
            "status": "pending_payment"
          }
        ],
        "extension_attributes": {
          "shipping_assignments": [
            {
              "shipping": {
                "address": {
                  "address_type": "shipping",
                  "city": "臺北市",
                  "country_id": "TW",
                  "email": "richie@aiii.ai",
                  "entity_id": 293,
                  "firstname": "開發人員 開發人員",
                  "lastname": "開發人員 開發人員",
                  "parent_id": 148,
                  "postcode": "100",
                  "region": "中正區",
                  "region_code": "中正區",
                  "street": [
                    "test"
                  ],
                  "telephone": "0900000000"
                },
                "method": "flatrate_flatrate",
                "total": {
                  "base_shipping_amount": 1,
                  "base_shipping_canceled": 1,
                  "base_shipping_discount_amount": 0,
                  "base_shipping_discount_tax_compensation_amnt": 0,
                  "base_shipping_incl_tax": 1,
                  "base_shipping_tax_amount": 0,
                  "shipping_amount": 1,
                  "shipping_canceled": 1,
                  "shipping_discount_amount": 0,
                  "shipping_discount_tax_compensation_amount": 0,
                  "shipping_incl_tax": 1,
                  "shipping_tax_amount": 0
                }
              },
              "items": [
                {
                  "amount_refunded": 0,
                  "base_amount_refunded": 0,
                  "base_discount_amount": 0,
                  "base_discount_invoiced": 0,
                  "base_discount_tax_compensation_amount": 0,
                  "base_original_price": 499,
                  "base_price": 499,
                  "base_price_incl_tax": 499,
                  "base_row_invoiced": 0,
                  "base_row_total": 499,
                  "base_row_total_incl_tax": 499,
                  "base_tax_amount": 0,
                  "base_tax_invoiced": 0,
                  "created_at": "2023-07-07 07:30:15",
                  "discount_amount": 0,
                  "discount_invoiced": 0,
                  "discount_percent": 0,
                  "free_shipping": 0,
                  "discount_tax_compensation_amount": 0,
                  "discount_tax_compensation_canceled": 0,
                  "is_qty_decimal": 0,
                  "is_virtual": 0,
                  "item_id": 272,
                  "name": "無線行動滑鼠1850 - 桃花粉",
                  "no_discount": 0,
                  "order_id": 148,
                  "original_price": 499,
                  "price": 499,
                  "price_incl_tax": 499,
                  "product_id": 225,
                  "product_type": "simple",
                  "qty_canceled": 1,
                  "qty_invoiced": 0,
                  "qty_ordered": 1,
                  "qty_refunded": 0,
                  "qty_returned": 0,
                  "qty_shipped": 0,
                  "quote_item_id": 720,
                  "row_invoiced": 0,
                  "row_total": 499,
                  "row_total_incl_tax": 499,
                  "row_weight": 0,
                  "sku": "4411.HW566.503-1",
                  "store_id": 1,
                  "tax_amount": 0,
                  "tax_canceled": 0,
                  "tax_invoiced": 0,
                  "tax_percent": 0,
                  "updated_at": "2023-07-08 08:00:04"
                }
              ]
            }
          ],
          "payment_additional_info": [
            {
              "key": "method_title",
              "value": "null"
            }
          ],
          "applied_taxes": [],
          "item_applied_taxes": []
        }
      }
    ],
    [
      {
        "base_currency_code": "TWD",
        "base_discount_amount": 0,
        "base_discount_canceled": 0,
        "base_grand_total": 500,
        "base_discount_tax_compensation_amount": 0,
        "base_shipping_amount": 1,
        "base_shipping_canceled": 1,
        "base_shipping_discount_amount": 0,
        "base_shipping_discount_tax_compensation_amnt": 0,
        "base_shipping_incl_tax": 1,
        "base_shipping_tax_amount": 0,
        "base_subtotal": 499,
        "base_subtotal_canceled": 499,
        "base_subtotal_incl_tax": 499,
        "base_tax_amount": 0,
        "base_tax_canceled": 0,
        "base_total_canceled": 500,
        "base_total_due": 500,
        "base_to_global_rate": 1,
        "base_to_order_rate": 1,
        "billing_address_id": 294,
        "created_at": "2023-07-07 07:30:15",
        "customer_email": "richie@aiii.ai",
        "customer_firstname": "開發人員 開發人員",
        "customer_is_guest": 1,
        "customer_lastname": "開發人員 開發人員",
        "customer_note_notify": 1,
        "discount_amount": 0,
        "discount_canceled": 0,
        "email_sent": 1,
        "entity_id": 148,
        "global_currency_code": "TWD",
        "grand_total": 500,
        "discount_tax_compensation_amount": 0,
        "increment_id": "000000144",
        "is_virtual": 0,
        "order_currency_code": "TWD",
        "protect_code": "0be877ebde9832999acc421c053dddd8",
        "quote_id": 389,
        "remote_ip": "61.216.8.131",
        "shipping_amount": 1,
        "shipping_canceled": 1,
        "shipping_description": "宅配到府 - 運費",
        "shipping_discount_amount": 0,
        "shipping_discount_tax_compensation_amount": 0,
        "shipping_incl_tax": 1,
        "shipping_tax_amount": 0,
        "state": "canceled",
        "status": "canceled",
        "store_currency_code": "TWD",
        "store_id": 1,
        "store_name": "Main Website\n台灣微軟授權線上商店\n繁體中文",
        "store_to_base_rate": 0,
        "store_to_order_rate": 0,
        "subtotal": 499,
        "subtotal_canceled": 499,
        "subtotal_incl_tax": 499,
        "tax_amount": 0,
        "tax_canceled": 0,
        "total_canceled": 500,
        "total_due": 500,
        "total_item_count": 1,
        "total_qty_ordered": 1,
        "updated_at": "2023-07-08 08:00:04",
        "weight": 0,
        "items": [
          {
            "amount_refunded": 0,
            "base_amount_refunded": 0,
            "base_discount_amount": 0,
            "base_discount_invoiced": 0,
            "base_discount_tax_compensation_amount": 0,
            "base_original_price": 499,
            "base_price": 499,
            "base_price_incl_tax": 499,
            "base_row_invoiced": 0,
            "base_row_total": 499,
            "base_row_total_incl_tax": 499,
            "base_tax_amount": 0,
            "base_tax_invoiced": 0,
            "created_at": "2023-07-07 07:30:15",
            "discount_amount": 0,
            "discount_invoiced": 0,
            "discount_percent": 0,
            "free_shipping": 0,
            "discount_tax_compensation_amount": 0,
            "discount_tax_compensation_canceled": 0,
            "is_qty_decimal": 0,
            "is_virtual": 0,
            "item_id": 272,
            "name": "無線行動滑鼠1850 - 桃花粉",
            "no_discount": 0,
            "order_id": 148,
            "original_price": 499,
            "price": 499,
            "price_incl_tax": 499,
            "product_id": 225,
            "product_type": "simple",
            "qty_canceled": 1,
            "qty_invoiced": 0,
            "qty_ordered": 1,
            "qty_refunded": 0,
            "qty_returned": 0,
            "qty_shipped": 0,
            "quote_item_id": 720,
            "row_invoiced": 0,
            "row_total": 499,
            "row_total_incl_tax": 499,
            "row_weight": 0,
            "sku": "4411.HW566.503-1",
            "store_id": 1,
            "tax_amount": 0,
            "tax_canceled": 0,
            "tax_invoiced": 0,
            "tax_percent": 0,
            "updated_at": "2023-07-08 08:00:04"
          }
        ],
        "billing_address": {
          "address_type": "billing",
          "city": "臺北市",
          "country_id": "TW",
          "email": "richie@aiii.ai",
          "entity_id": 294,
          "firstname": "開發人員 開發人員",
          "lastname": "開發人員 開發人員",
          "parent_id": 148,
          "postcode": "100",
          "region": "中正區",
          "region_code": "中正區",
          "street": [
            "test"
          ],
          "telephone": "0900000000"
        },
        "payment": {
          "account_status": null,
          "additional_information": [
            null
          ],
          "amount_ordered": 500,
          "base_amount_ordered": 500,
          "base_shipping_amount": 1,
          "cc_exp_year": "0",
          "cc_last4": null,
          "cc_ss_start_month": "0",
          "cc_ss_start_year": "0",
          "entity_id": 148,
          "method": "newebpay",
          "parent_id": 148,
          "shipping_amount": 1
        },
        "status_histories": [
          {
            "comment": "付款類型 : NewebPay",
            "created_at": "2023-07-07 07:30:19",
            "entity_id": 628,
            "entity_name": "order",
            "is_customer_notified": null,
            "is_visible_on_front": 1,
            "parent_id": 148,
            "status": "pending_payment"
          },
          {
            "comment": null,
            "created_at": "2023-07-07 07:30:15",
            "entity_id": 627,
            "entity_name": "order",
            "is_customer_notified": 1,
            "is_visible_on_front": 0,
            "parent_id": 148,
            "status": "pending_payment"
          }
        ],
        "extension_attributes": {
          "shipping_assignments": [
            {
              "shipping": {
                "address": {
                  "address_type": "shipping",
                  "city": "臺北市",
                  "country_id": "TW",
                  "email": "richie@aiii.ai",
                  "entity_id": 293,
                  "firstname": "開發人員 開發人員",
                  "lastname": "開發人員 開發人員",
                  "parent_id": 148,
                  "postcode": "100",
                  "region": "中正區",
                  "region_code": "中正區",
                  "street": [
                    "test"
                  ],
                  "telephone": "0900000000"
                },
                "method": "flatrate_flatrate",
                "total": {
                  "base_shipping_amount": 1,
                  "base_shipping_canceled": 1,
                  "base_shipping_discount_amount": 0,
                  "base_shipping_discount_tax_compensation_amnt": 0,
                  "base_shipping_incl_tax": 1,
                  "base_shipping_tax_amount": 0,
                  "shipping_amount": 1,
                  "shipping_canceled": 1,
                  "shipping_discount_amount": 0,
                  "shipping_discount_tax_compensation_amount": 0,
                  "shipping_incl_tax": 1,
                  "shipping_tax_amount": 0
                }
              },
              "items": [
                {
                  "amount_refunded": 0,
                  "base_amount_refunded": 0,
                  "base_discount_amount": 0,
                  "base_discount_invoiced": 0,
                  "base_discount_tax_compensation_amount": 0,
                  "base_original_price": 499,
                  "base_price": 499,
                  "base_price_incl_tax": 499,
                  "base_row_invoiced": 0,
                  "base_row_total": 499,
                  "base_row_total_incl_tax": 499,
                  "base_tax_amount": 0,
                  "base_tax_invoiced": 0,
                  "created_at": "2023-07-07 07:30:15",
                  "discount_amount": 0,
                  "discount_invoiced": 0,
                  "discount_percent": 0,
                  "free_shipping": 0,
                  "discount_tax_compensation_amount": 0,
                  "discount_tax_compensation_canceled": 0,
                  "is_qty_decimal": 0,
                  "is_virtual": 0,
                  "item_id": 272,
                  "name": "無線行動滑鼠1850 - 桃花粉",
                  "no_discount": 0,
                  "order_id": 148,
                  "original_price": 499,
                  "price": 499,
                  "price_incl_tax": 499,
                  "product_id": 225,
                  "product_type": "simple",
                  "qty_canceled": 1,
                  "qty_invoiced": 0,
                  "qty_ordered": 1,
                  "qty_refunded": 0,
                  "qty_returned": 0,
                  "qty_shipped": 0,
                  "quote_item_id": 720,
                  "row_invoiced": 0,
                  "row_total": 499,
                  "row_total_incl_tax": 499,
                  "row_weight": 0,
                  "sku": "4411.HW566.503-1",
                  "store_id": 1,
                  "tax_amount": 0,
                  "tax_canceled": 0,
                  "tax_invoiced": 0,
                  "tax_percent": 0,
                  "updated_at": "2023-07-08 08:00:04"
                }
              ]
            }
          ],
          "payment_additional_info": [
            {
              "key": "method_title",
              "value": "null"
            }
          ],
          "applied_taxes": [],
          "item_applied_taxes": []
        }
      }
    ]
  ]

  convertToSheet(customersDataArray) {
    // const csvData = "Name,Email\nJohn Doe,john@example.com\nJane Smith,jane@example.com";
    // const title = 'ID,Ship name,Ship address,phone,order NO,Product,Qty,SKU,Invoice,payment';

    const customersData = customersDataArray.flat();

    const title = 'ID,Ship name,Ship address,phone,payment';
    const regex = /(?<=\n)(.*?)(?=\n)/g;

    const rowData = customersData.map(customerData => {
      let storeName = '';

        if (customerData && customerData.store_name) {
            const matches = customerData.store_name.match(regex);
            storeName = matches[0].trim();
        };
        
      return '\n' + customerData.increment_id + ','
      + storeName + ','
      + customerData.billing_address.city + customerData.billing_address.region + customerData.billing_address.street[0] + ','
      + customerData.billing_address.telephone + ','
      + customerData.payment.method
    });

    const sheetResult = title + rowData.join("");
    this.downloadCsv(sheetResult);
}

  downloadCsv(csvData) {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'customers-orders.csv';
    link.target = '_blank';

    if (document.createEvent) {
      var event = document.createEvent('MouseEvents');
      event.initEvent('click', true, true);
      link.dispatchEvent(event);
    } else {
      link.click();
    };

    window.URL.revokeObjectURL(url);
  }

  getPHPSessionID() {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();

      if (cookie.startsWith('PHPSESSID=')) {
        const [name, value] = cookie.split('=');
        console.log('value', value)
        return value;
      };
    };

    return null;
  }


}
