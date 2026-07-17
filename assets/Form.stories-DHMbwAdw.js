import{j as t}from"./jsx-runtime-BQ8XKDWZ.js";import{r as p}from"./iframe-DuzJ3-xf.js";import{b as l,a as u}from"./index.esm-BvwEacxj.js";import{F as d}from"./FormContainer-C7eCsqhv.js";import{F as I}from"./FormField-CiobzJA8.js";import{B as f}from"./Button-DsWIgKwr.js";import{I as x}from"./Input-DO9B7b5M.js";import{u as L}from"./useFormProps-DIvwJoaV.js";import"./types-3LfPC6TZ.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BXUB3CAz.js";import"./ErrorMessage-C5HC5Vf_.js";import"./Text-pLVOucf6.js";import"./helpers-CH0y8nQM.js";import"./IconDynamicComponent-Dk4FBIIr.js";import"./index-BoNFqYXL.js";import"./Label-DQSMISYM.js";import"./IconCheckmarkCircleFilled-vhCnGYex.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
