import {expect} from "chai";
import {airport} from "./main";

describe('test', () => {
    it('test should run', () => {
        expect(airport('it')).to.eql('it works!')
    })
})