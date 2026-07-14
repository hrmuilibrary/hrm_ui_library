import{j as r}from"./jsx-runtime-CVR_gjst.js";import{r as u}from"./iframe-Cz47NnCw.js";import{b as L,a as V}from"./index.esm-Ba7ledjw.js";import{u as v,g as S,C as _,F as b}from"./FormContainer-Bnmw4eJP.js";import{E as N}from"./ErrorMessage-CoLuO0CR.js";import{F as O}from"./types-01LlMfXP.js";import{c as R}from"./index-D7DBw789.js";import{B as q}from"./Button-CDXXyKIE.js";import{I as M}from"./Input-C-NdvSYC.js";import{u as B}from"./useFormProps-B82Tn6RQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Text-G_RZLOGM.js";import"./helpers-d-VT9Uo5.js";import"./IconDynamicComponent-D-Z5j4h5.js";import"./index-D0T0OhI4.js";import"./Label-CwqV23Sh.js";import"./IconCheckmarkCircleFilled-f6W03e8z.js";var D=function(e){var s=e.as,t=e.errors,o=e.name,n=e.message,p=e.render,F=(function(d,h){if(d==null)return{};var a,m,l={},I=Object.keys(d);for(m=0;m<I.length;m++)h.indexOf(a=I[m])>=0||(l[a]=d[a]);return l})(e,["as","errors","name","message","render"]),g=v(),c=S(t||g.formState.errors,o);if(!c)return null;var i=c.message,E=c.types,f=Object.assign({},F,{children:i||n});return u.isValidElement(s)?u.cloneElement(s,f):p?p({message:i||n,messages:E}):u.createElement(s||u.Fragment,f)};const j=e=>{const{As:s,name:t,className:o="",dataId:n="",hideErrorMessage:p=!1,errorMessageIcon:F,defaultValue:g}=e,{register:c,errors:i,setValue:E,control:f}=u.useContext(O);if(!c)return null;const d=c(t);return r.jsx("div",{className:R("form-container__field",o,t),children:r.jsx(_,{control:f,name:t,...g?{defaultValue:g}:{},render:({field:h,fieldState:a})=>{var m;return r.jsxs(r.Fragment,{children:[s({hasError:!!a.error,isValid:a.isTouched&&a.isDirty&&!a.invalid,dataId:n,...d,setFieldValue:(l,I,A)=>E(l,I,{shouldValidate:!0,shouldDirty:!0,shouldTouch:!0,...A}),...h}),p?null:r.jsx(D,{name:(m=i==null?void 0:i[t])!=null&&m.root?`${t}.root`:t,errors:i,render:({message:l})=>r.jsx(N,{dataId:n,message:l||"",className:"full-width",icon:F})})]})}})})};j.__docgenInfo={description:"",methods:[],displayName:"FormField",props:{As:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: IFormCompProps) => React.ReactElement",signature:{arguments:[{type:{name:"IFormCompProps"},name:"props"}],return:{name:"ReactReactElement",raw:"React.ReactElement"}}},description:""},name:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},hideErrorMessage:{required:!1,tsType:{name:"boolean"},description:""},errorMessageIcon:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"any"},description:""}},composes:["IBaseProps"]};const ne={title:"Form Container",component:b},P=L({firstname:V().required("validation")}),k=()=>{const{trigger:e,onSubmit:s}=B(),t=async o=>{await(e==null?void 0:e("firstname"))&&s&&s()};return r.jsx(j,{name:"firstname",As:o=>r.jsx(M,{handleBlurEvent:t,...o})})},w=()=>{const e={firstname:""},[s,t]=u.useState(!1),o=n=>{t(!0),console.log(n)};return console.log(s),r.jsx("div",{style:{maxWidth:300},children:r.jsx(b,{onSubmit:o,validationScheme:P,initialValues:e,dataId:"form-container",children:r.jsxs(r.Fragment,{children:[r.jsx(k,{}),r.jsx(q,{buttonActionType:"submit",buttonText:"Ok",className:"mt-16",isLoading:s})]})})})},x=w.bind({});var y,T,C;x.parameters={...x.parameters,docs:{...(y=x.parameters)==null?void 0:y.docs,source:{originalSource:`(): React.ReactElement => {
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
      <_FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={INITIAL_VALUES} dataId="form-container">
        <>
          <CustomInput />
          {/*// @ts-ignore*/}
          {/*<FormField name="date" As={(props) => <SimpleDatePicker {...props} />} />*/}

          <Button buttonActionType="submit" buttonText={'Ok'} className="mt-16" isLoading={isLoading} />
        </>
      </_FormContainer>
    </div>;
}`,...(C=(T=x.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};const ae=["FormContainer"];export{x as FormContainer,ae as __namedExportsOrder,ne as default};
