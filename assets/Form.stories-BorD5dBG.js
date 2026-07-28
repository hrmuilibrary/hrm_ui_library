import{j as t}from"./jsx-runtime-BKD_WvF8.js";import{r as p}from"./iframe-B9fdRgoH.js";import{b as l,a as u}from"./index.esm-TAggrxr4.js";import{F as d}from"./FormContainer-DP8-236e.js";import{F as I}from"./FormField-DkWTSD6G.js";import{B as f}from"./Button-CVg82LGG.js";import{I as x}from"./Input-EOfoKtMz.js";import{u as L}from"./useFormProps-BEhaMOdD.js";import"./types-m-LJ5e63.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BQe8DgU0.js";import"./ErrorMessage-DSIcI7Pg.js";import"./Text-tjUpgYfB.js";import"./helpers-ZzQuR0Yr.js";import"./IconDynamicComponent-CJIH-vd1.js";import"./index-aqxgRizz.js";import"./Label-Bym6qUPb.js";import"./IconCheckmarkCircleFilled-DHL8Zzp1.js";const $={title:"Form Container",component:d},S=l({firstname:u().required("validation")}),F=()=>{const{trigger:o,onSubmit:e}=L(),n=async s=>{await(o==null?void 0:o("firstname"))&&e&&e()};return t.jsx(I,{name:"firstname",As:s=>t.jsx(x,{handleBlurEvent:n,...s})})},A=()=>{const o={firstname:""},[e,n]=p.useState(!1),s=i=>{n(!0),console.log(i)};return console.log(e),t.jsx("div",{style:{maxWidth:300},children:t.jsx(d,{onSubmit:s,validationScheme:S,initialValues:o,dataTestId:"form-container",children:t.jsxs(t.Fragment,{children:[t.jsx(F,{}),t.jsx(f,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:e})]})})})},r=A.bind({});var a,m,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(): React.ReactElement => {
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
