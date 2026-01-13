import{j as t}from"./jsx-runtime-oQqas1I7.js";import{b as c,a as l}from"./index.esm-BuQ7KzPT.js";import"./iframe-DYBRI1wp.js";import{u}from"./DropzoneFileUpload-CKaDWd0o.js";import{F as m,l as d,I}from"./UnderConstruction-BP18KISM.js";import{B as x}from"./types-DQ6VAzuE.js";import"./ButtonGroup-D-oAr9WM.js";import"./Chips-CBc4N0zw.js";import"./Text-Ervgr_He.js";import"./IconYoutube-Ckr_0WrR.js";import"./IconInfo-D81pZUPg.js";import"./IconPerson-BIEUOdwe.js";import"./IconUnitsEmployee-DtJhYD3s.js";import"./preload-helper-Dp1pzeXC.js";import"./IconDynamicComponent-BzOHAEqy.js";import"./index-Bw1HxFsN.js";import"./index-DJWDk8xS.js";const R={title:"Form Container",component:m},A=c({firstname:l().required("validation")}),F=()=>{const{trigger:o,onSubmit:r}=u(),p=async a=>{await(o==null?void 0:o("firstname"))&&r&&r()};return t.jsx(d,{name:"firstname",As:a=>t.jsx(I,{handleBlurEvent:p,...a})})},f=()=>{const o={firstname:""};return t.jsx("div",{style:{maxWidth:300},children:t.jsx(m,{onSubmit:r=>console.log("data",r),validationScheme:A,initialValues:o,children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(x,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16"})]})})})},e=f.bind({});var i,s,n;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`(): React.ReactElement => {
  const INITIAL_VALUES = {
    firstname: ''
  };
  return <div style={{
    maxWidth: 300
  }}>
      <_FormContainer onSubmit={data => console.log('data', data)} validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES}>
        <>
          <CustomInput />
          {/*// @ts-ignore*/}
          {/*<FormField name="date" As={(props) => <SimpleDatePicker {...props} />} />*/}

          <Button buttonActionType="submit" buttonText={'Ok'} className="mt-16" />
        </>
      </_FormContainer>
    </div>;
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const U=["FormContainer"];export{e as FormContainer,U as __namedExportsOrder,R as default};
