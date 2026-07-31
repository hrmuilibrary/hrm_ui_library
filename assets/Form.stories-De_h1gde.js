import{j as t}from"./jsx-runtime-SbcHhCkt.js";import{r as p}from"./iframe-Bgel0fic.js";import{b as l,a as u}from"./index.esm-2Q39xOSV.js";import{F as d}from"./FormContainer-CMeaO2Ve.js";import{F as I}from"./FormField-Ahvy87yi.js";import{B as f}from"./Button-BGu00P_f.js";import{I as x}from"./Input-BxjZMFw-.js";import{u as L}from"./useFormProps-CJCsrNRZ.js";import"./types-DyFBYxib.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CUaafn95.js";import"./ErrorMessage-GCBX73zC.js";import"./Text-q0y3Ugtx.js";import"./helpers-BU9J2je4.js";import"./IconDynamicComponent-CfloZ5Ca.js";import"./index-D0MkiU4T.js";import"./Label-Dv42gwgl.js";import"./IconCheckmarkCircleFilled-htYO6uQe.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
