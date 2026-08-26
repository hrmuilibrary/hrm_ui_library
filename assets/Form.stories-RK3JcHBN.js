import{j as t}from"./jsx-runtime-eZA7XPs2.js";import{r as p}from"./iframe-Bu6IG7x0.js";import{b as l,a as u}from"./index.esm-hveYrogV.js";import{F as d}from"./FormContainer-CiE2ispX.js";import{F as I}from"./FormField-BIHwWJMT.js";import{B as f}from"./Button-0fHBq_V-.js";import{I as x}from"./Input-B3gaEhlb.js";import{u as L}from"./useFormProps-D8N7lh7u.js";import"./types-DkRXjhPg.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DyZCXPR1.js";import"./ErrorMessage-Dr5Ip2Xf.js";import"./Text-BEaaacjR.js";import"./helpers-B70rEIFi.js";import"./IconDynamicComponent-D25EWgep.js";import"./index-CRfeIcbX.js";import"./Label-Tbk4f5TT.js";import"./IconCheckmarkCircleFilled-F7rA0MYH.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
  const INITIAL_VALUES = {
    firstname: ''
  };
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log(data);
  };
  console.log(isLoading);
  return <div style={{
    maxWidth: 300
  }}>
      <_FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES} dataTestId="form-container">
        <>
          <CustomInput />
          {/*// @ts-ignore*/}
          {/*<FormField name="date" As={(props) => <SimpleDatePicker {...props} />} />*/}

          <Button buttonActionType="submit" buttonText={'Ok'} className="mt-16" isLoading={isLoading} />
        </>
      </_FormContainer>
    </div>;
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const H=["FormContainer"];export{r as FormContainer,H as __namedExportsOrder,$ as default};
