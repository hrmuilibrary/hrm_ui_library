import{j as t}from"./jsx-runtime-DXhgEWEq.js";import{r as p}from"./iframe-Dxu7kTaY.js";import{b as l,a as u}from"./index.esm-CgM8ZqeE.js";import{F as d}from"./FormContainer-BJtFjb6m.js";import{F as I}from"./FormField-YrawWtDG.js";import{B as f}from"./Button-DO8ynCEe.js";import{I as x}from"./Input-DySFxlWK.js";import{u as L}from"./useFormProps-D4QdzcSZ.js";import"./types-BwufIdl1.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D_o2rEy-.js";import"./ErrorMessage-BLxoPjM-.js";import"./Text-CD4tez-b.js";import"./helpers-B695UWyA.js";import"./IconDynamicComponent-DjBQjvKP.js";import"./index-D0wQcglW.js";import"./Label-H7I5gyLb.js";import"./IconCheckmarkCircleFilled-D2mW7qma.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
