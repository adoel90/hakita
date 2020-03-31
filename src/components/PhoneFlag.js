import React,{Component} from 'react';
import ReactCustomFlagSelect from 'react-custom-flag-select';
// import "react-custom-flag-select/lib/react-custom-flag-select.min.css";
import './PhoneFlag.css'


const PhoneFlag = ({
    currentItem, 
    dummyItem,
    FLAG_SELECTOR_OPTION_LIST,
    onChangeAreaCode
}) => (
    <ReactCustomFlagSelect
        tabIndex={'1'} //
        id={'areaCode'} //
        name={'areaCode'} //
        value={currentItem != undefined ? currentItem.countryNumberCode : dummyItem.id} 
        // value={currentItem.id} 
        disabled={false} //
        optionList={FLAG_SELECTOR_OPTION_LIST} //
        // selectOptionListItemHtml={<div>us</div>}//
        classNameWrapper={''} //
        classNameContainer={''} //
        classNameOptionListItem={''} //
        classNameOptionListContainer={''} //
        classNameDropdownIconOptionListItem={''} //
        customStyleWrapper={{}} //
        customStyleContainer={{ border: 'none', fontSize: '12px' }} //
        customStyleSelect={{ width: '60px' }}
        customStyleOptionListItem={{}} //
        customStyleOptionListContainer={{ maxHeight: '100px', overflow: 'auto', width: '120px', marginTop: '22%', left: '46px' }} //
        customStyleDropdownIcon={{}} //
        // onChange={areaCode => {
        //     this.setState({ areaCode: areaCode }, () => {
        //         this.handlePhoneChange(phone);
        //     });
        // }}
        onChange={onChangeAreaCode}
    />

)

// class PhoneFlag extends Component {

//     render(){

//         return (
            // <ReactCustomFlagSelect
            //     tabIndex={'1'} //
            //     id={'areaCode'} //
            //     name={'areaCode'} //
            //     value={currentItem.id} //
            //     disabled={false} //
            //     optionList={FLAG_SELECTOR_OPTION_LIST} //
            //     // selectOptionListItemHtml={<div>us</div>}//
            //     classNameWrapper={''} //
            //     classNameContainer={''} //
            //     classNameOptionListItem={''} //
            //     classNameOptionListContainer={''} //
            //     classNameDropdownIconOptionListItem={''} //
            //     customStyleWrapper={{}} //
            //     customStyleContainer={{ border: 'none', fontSize: '12px' }} //
            //     customStyleSelect={{ width: '60px' }}
            //     customStyleOptionListItem={{}} //
            //     customStyleOptionListContainer={{ maxHeight: '100px', overflow: 'auto', width: '120px', marginTop: '22%', left: '46px' }} //
            //     customStyleDropdownIcon={{}} //
            //     onChange={areaCode => {
            //         this.setState({ areaCode: areaCode }, () => {
            //             this.handlePhoneChange(phone);
            //         });
            //     }}
            // />
//         )
//     }
// }


export default PhoneFlag;