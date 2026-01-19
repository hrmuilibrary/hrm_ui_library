import{j as t}from"./Text-D__sJRfZ.js";import{b as p,a as l}from"./index.esm-EYp6ioH6.js";import"./iframe-C4aqWbSv.js";import{u}from"./DropzoneFileUpload-zeHFHiAK.js";import{F as m,m as d,I}from"./UnderConstruction-Dy_905gT.js";import{B as x}from"./types-DgKGVZOG.js";import"./ButtonGroup-DPNhRfYi.js";import"./Chips-ClRZkzpD.js";import"./preload-helper-Dp1pzeXC.js";import"./IconInfo-Dg27E1n7.js";import"./IconChevronDoubleRight-BZ4yhFAI.js";import"./IconDismissCircleFilled-Cj6hEDzZ.js";import"./index-BWyb6v_r.js";const B={title:"Form Container",component:m},A=p({firstname:l().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=u(),c=async a=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(d,{name:"firstname",As:a=>t.jsx(I,{handleBlurEvent:c,...a})})},f=()=>{const o={firstname:""};return t.jsx("div",{style:{maxWidth:300},children:t.jsx(m,{onSubmit:e=>console.log("data",e),validationScheme:A,initialValues:o,children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(x,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16"})]})})})},r=f.bind({});var s,n,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(): React.ReactElement => {
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
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const g=["FormContainer"];export{r as FormContainer,g as __namedExportsOrder,B as default};
