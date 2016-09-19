import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CookieOrder } from '../util/util.service';

@Component({
    moduleId: module.id,
    selector: 'order',
    styleUrls: ['order.css'],
    templateUrl: 'order.html'
})
export class Order {
    @Input() order: CookieOrder;
    @Input() types: string[];
    @Output() delete = new EventEmitter<CookieOrder>();

    constructor() { }

    deleteOrder() {
        this.delete.emit(this.order);
    }
}