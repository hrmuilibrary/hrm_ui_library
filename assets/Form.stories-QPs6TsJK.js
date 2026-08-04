import{j as t}from"./jsx-runtime-jQRlJpq_.js";import{r as p}from"./iframe-IekmBLgU.js";import{b as l,a as u}from"./index.esm-qJkWcLKJ.js";import{F as d}from"./FormContainer-B8--nr4U.js";import{F as I}from"./FormField-Dz681j7H.js";import{B as f}from"./Button-M3xTZvml.js";import{I as x}from"./Input-BumMH9FS.js";import{u as L}from"./useFormProps-Cbvvev0C.js";import"./types-Bkil3lR1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BOjMRMBe.js";import"./ErrorMessage-B-5yUWUJ.js";import"./Text-DDH3SuXY.js";import"./helpers-CyjX8nkc.js";import"./IconDynamicComponent-CGHa6Li-.js";import"./index-z1LVnpwX.js";import"./Label-B2H_cz-p.js";import"./IconCheckmarkCircleFilled-mtkGZX8B.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
