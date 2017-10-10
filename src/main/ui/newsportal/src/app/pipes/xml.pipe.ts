import * as vkbeautify from 'vkbeautify';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'xml'
})
export class XmlPipe implements PipeTransform {

    transform(value:any, args?:any):any {
        if (value) {
            return vkbeautify.xml(value);
        } else {
            return value;
        }
    }

}
