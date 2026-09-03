import{j as t}from"./jsx-runtime-CixmCXYB.js";import{r as p}from"./iframe-CdU7qALN.js";import{b as l,a as u}from"./index.esm-C2iKNuYT.js";import{F as d}from"./FormContainer-D0JU7440.js";import{F as I}from"./FormField-DsJqj87A.js";import{B as f}from"./Button-DfJvPqhN.js";import{I as x}from"./Input-hMI3BL-k.js";import{u as L}from"./useFormProps-DeoeMsol.js";import"./types-BbW1ZtY6.js";import"./preload-helper-Dp1pzeXC.js";import"./index-DE9b-KKH.js";import"./ErrorMessage-DGKMssSp.js";import"./Text-My9GXrOB.js";import"./helpers-Bn2gO0KC.js";import"./IconDynamicComponent-DBtKiA4p.js";import"./index-DhXq4NVr.js";import"./Label-CUSgKQks.js";import"./IconCheckmarkCircleFilled-DM7PpGXW.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
