import{j as e}from"./jsx-runtime-CixmCXYB.js";import{r as c}from"./iframe-CdU7qALN.js";import{b as ye,d as fe}from"./index.esm-C2iKNuYT.js";import{c as _}from"./index-DE9b-KKH.js";import{T as h}from"./Text-My9GXrOB.js";import{A as W}from"./AvatarGroup-ChZTAl22.js";import{B as Se}from"./BadgeV2-gDE1rHqV.js";import{I as be}from"./IconDismiss-BnCR8okq.js";import{L as xe}from"./Label-CUSgKQks.js";import{E as Te}from"./ErrorMessage-DGKMssSp.js";import"./types-BbW1ZtY6.js";import{u as Ie}from"./useOnOutsideClick-Ih5BL_8Y.js";import{F as qe}from"./FormContainer-D0JU7440.js";import{F as Me}from"./FormField-DsJqj87A.js";import{B as Ae}from"./Button-DfJvPqhN.js";import"./preload-helper-Dp1pzeXC.js";import"./helpers-Bn2gO0KC.js";import"./Tooltip-DTziODZP.js";import"./index-AboGxAif.js";import"./index-DhXq4NVr.js";import"./DropzoneFileUpload-Cvr_RKU5.js";import"./useFormProps-DeoeMsol.js";import"./IconArrowDownloadFilled-CG65Mw_H.js";import"./Snackbar-BeqPvJAV.js";import"./IconDynamicComponent-DBtKiA4p.js";import"./Alert-C_R_-qNx.js";import"./IconDismissFilled-D1ciZdNY.js";import"./Progress-BoGqKv8q.js";import"./IconAdd-DvJuCMpJ.js";const y=c.forwardRef((d,s)=>{const{options:i,selectedItems:o,value:n,onAdd:r,onRemove:u,setFieldValue:p,name:I,placeholder:re,hasError:F,label:le,labelAddons:de,required:oe,disabled:m,error:f,helperText:k,className:me="",dataTestId:q="",size:ce="medium",dropdownWidth:D,translations:g,dataTestIdPrefix:ue,isLoading:pe}=d,[R,E]=c.useState(""),[P,M]=c.useState(!1),z=c.useRef(null),ge=c.useId(),a=ue||q,N=F!==void 0?F:!!f,A=c.useMemo(()=>n||o||[],[n,o]);Ie(z.current,()=>{M(!1),E("")},P,ge);const C=i.filter(t=>{var v;return!A.find(O=>O.id===t.id)&&(t.name.toLowerCase().includes(R.toLowerCase())||((v=t.meta)==null?void 0:v.toLowerCase().includes(R.toLowerCase())))}),ve=t=>{if(m)return;const v=[...A,t];I&&p&&p(I,v,{shouldValidate:!0}),r==null||r(t),E(""),M(!1)},he=t=>{if(m)return;const v=A.filter(O=>O.id!==t);I&&p&&p(I,v,{shouldValidate:!0}),u==null||u(t)};return e.jsxs("div",{className:_("multi-select-v2",`multi-select-v2--${ce}`,me,{"multi-select-v2--invalid":N,"multi-select-v2--disabled":m}),children:[e.jsx(xe,{text:le,required:oe,disabled:m,labelAddons:de,dataTestId:q}),e.jsxs("div",{ref:z,className:_("multi-select-v2__inner","flexbox","align-items--center","gap-8"),"data-test-id":q,children:[A.map(t=>e.jsxs("div",{className:_("multi-select-v2__chip",{"multi-select-v2__chip--highlighted":t.highlighted}),children:[e.jsx(W,{initials:t.initials,size:"xsmall"}),e.jsx(h,{size:"small",type:t.highlighted?"selected":void 0,className:"multi-select-v2__chip-name",children:t.name}),t.badge?e.jsx(Se,{text:t.badge,size:"small",type:"gray",style:"light",className:"multi-select-v2__chip-badge",dataTestId:a?`${a}-badge-${t.id}`:void 0}):null,e.jsx("button",{type:"button",className:"multi-select-v2__chip-remove",disabled:m,"data-test-id":a?`${a}-chip-remove-${t.id}`:void 0,onClick:()=>he(t.id),children:e.jsx(be,{size:"xxsmall",type:"tertiary"})})]},t.id)),e.jsx("div",{className:"multi-select-v2__search-wrap",children:e.jsx("input",{ref:s,className:"multi-select-v2__search",disabled:m,"data-test-id":a?`${a}-search`:void 0,value:R,placeholder:re,onChange:t=>{E(t.target.value),M(!0)},onFocus:()=>M(!0)})}),P&&!m?e.jsx("div",{className:_("multi-select-v2__dropdown","multi-select-v2__dropdown__options-scroll","scrollbar","scrollbar--vertical"),style:D?{width:D,right:"auto"}:void 0,children:pe?e.jsx(h,{size:"small",type:"tertiary",className:"multi-select-v2__dropdown-empty",dataTestId:a?`${a}-dropdown-loading`:void 0,children:(g==null?void 0:g.loadingMessage)??"Results loading ..."}):C.length>0?C.map(t=>e.jsxs("button",{type:"button",className:"multi-select-v2__dropdown-item","data-test-id":a?`${a}-dropdown-item-${t.id}`:void 0,onClick:()=>ve(t),children:[e.jsx(W,{initials:t.initials,size:"xsmall"}),e.jsxs("div",{className:"multi-select-v2__dropdown-info",children:[e.jsx(h,{size:"small",weight:"semibold",children:t.name}),t.meta?e.jsx(h,{size:"xsmall",type:"tertiary",children:t.meta}):null]})]},t.id)):e.jsx(h,{size:"small",type:"tertiary",className:"multi-select-v2__dropdown-empty",dataTestId:a?`${a}-dropdown-empty`:void 0,children:g==null?void 0:g.emptyListMainMessage})}):null]}),f||k?e.jsxs("div",{className:"multi-select-v2__message mt-8",children:[N&&f?e.jsx(Te,{message:f,icon:"infoFilled",dataTestId:q}):null,k&&!(N&&f)?e.jsx(h,{size:"small",type:m?"disabled":"secondary",children:k}):null]}):null]})});y.displayName="MultiSelectV2";y.__docgenInfo={description:"",methods:[],displayName:"MultiSelectV2",props:{dataTestId:{required:!1,tsType:{name:"string"},description:""},hasError:{required:!1,tsType:{name:"boolean"},description:""},isValid:{required:!1,tsType:{name:"boolean"},description:""},value:{required:!1,tsType:{name:"TFormValue"},description:""},onChange:{required:!1,tsType:{name:"TOnChange"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},setFieldValue:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  name: string,
  value: TFormValue,
  shouldValidate?: { shouldValidate: boolean }
) => void`,signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"TFormValue"},name:"value"},{type:{name:"signature",type:"object",raw:"{ shouldValidate: boolean }",signature:{properties:[{key:"shouldValidate",value:{name:"boolean",required:!0}}]}},name:"shouldValidate"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}}],raw:"TMultiSelectOption[]"},description:""},selectedItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}}],raw:"TMultiSelectOption[]"},description:""},onAdd:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TMultiSelectOption) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  id: string
  name: string
  initials: string
  meta?: string
  badge?: string
  highlighted?: boolean
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}},{key:"initials",value:{name:"string",required:!0}},{key:"meta",value:{name:"string",required:!1}},{key:"badge",value:{name:"string",required:!1}},{key:"highlighted",value:{name:"boolean",required:!1}}]}},name:"item"}],return:{name:"void"}}},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},labelAddons:{required:!1,tsType:{name:"ReactElement"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | ReactElement",elements:[{name:"string"},{name:"ReactElement"}]},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},dropdownWidth:{required:!1,tsType:{name:"number"},description:""},translations:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  emptyListMainMessage?: string
  loadingMessage?: string
}`,signature:{properties:[{key:"emptyListMainMessage",value:{name:"string",required:!1}},{key:"loadingMessage",value:{name:"string",required:!1}}]}},description:""},dataTestIdPrefix:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""}}};const nt={title:"MultiSelectV2",component:y,argTypes:{size:{options:["small","medium","large"],control:{type:"radio"}}}},l=[{id:"1",name:"Ann Smith",initials:"AS",meta:"HR Manager · People",badge:"You",highlighted:!0},{id:"2",name:"John Doe",initials:"JD",meta:"Engineer · Engineering"},{id:"3",name:"Maria Petrosyan",initials:"MP",meta:"Designer · Product"},{id:"4",name:"David Grant",initials:"DG",meta:"Recruiter · People"},{id:"5",name:"Lilit Harutyunyan",initials:"LH",meta:"Accountant · Finance"},{id:"6",name:"Karen Sargsyan",initials:"KS",meta:"Backend Engineer · Engineering"},{id:"7",name:"Anna Baghdasaryan",initials:"AB",meta:"QA Engineer · Engineering"},{id:"8",name:"Tigran Avetisyan",initials:"TA",meta:"Product Manager · Product"},{id:"9",name:"Sona Grigoryan",initials:"SG",meta:"UX Researcher · Product"},{id:"10",name:"Vahagn Manukyan",initials:"VM",meta:"DevOps Engineer · Engineering"},{id:"11",name:"Nare Petrosyan",initials:"NP",meta:"Talent Acquisition · People"},{id:"12",name:"Armen Ghukasyan",initials:"AG",meta:"Frontend Engineer · Engineering"},{id:"13",name:"Diana Sahakyan",initials:"DS",meta:"Marketing Lead · Marketing"},{id:"14",name:"Hovhannes Dallakyan",initials:"HD",meta:"Data Analyst · Finance"},{id:"15",name:"Mane Voskanyan",initials:"MV",meta:"Support Specialist · Support"},{id:"16",name:"Gor Aslanyan",initials:"GA",meta:"Security Engineer · Engineering"},{id:"17",name:"Elen Mkrtchyan",initials:"EM",meta:"Payroll Specialist · Finance"},{id:"18",name:"Narek Hakobyan",initials:"NH",meta:"Solutions Architect · Engineering"}],j=d=>{const[s,i]=c.useState(()=>d.selectedItems??[]),o=r=>i(u=>[...u,r]),n=r=>i(u=>u.filter(p=>p.id!==r));return e.jsx("div",{style:{maxWidth:400},children:e.jsx(y,{...d,selectedItems:s,onAdd:o,onRemove:n})})},S=j.bind({});S.args={options:l,label:"Participants",placeholder:"Search and select people",selectedItems:[l[0]],helperText:"Add people to notify about this trip.",required:!0,size:"medium",dataTestIdPrefix:"multi-select-v2"};const _e=()=>{const[d,s]=c.useState({small:[],medium:[],large:[]});return e.jsx("div",{style:{maxWidth:400,display:"flex",flexDirection:"column",gap:24},children:["small","medium","large"].map(i=>e.jsx(y,{size:i,label:i,options:l,placeholder:"Search and select people",selectedItems:d[i],onAdd:o=>s(n=>({...n,[i]:[...n[i],o]})),onRemove:o=>s(n=>({...n,[i]:n[i].filter(r=>r.id!==o)}))},i))})},w=_e.bind({}),b=j.bind({});b.args={options:l,label:"Reviewers",placeholder:"Add a reviewer...",dropdownWidth:320,dataTestIdPrefix:"multi-select-v2-fixed-width"};const x=j.bind({});x.args={options:l,label:"Skills",placeholder:"Add a skill...",required:!0,hasError:!0,error:"Select at least one option.",dataTestId:"multi-select-v2-error"};const T=j.bind({});T.args={options:l,label:"Participants",selectedItems:[l[0],l[1]],disabled:!0,dataTestId:"multi-select-v2-disabled"};const we=ye({managers:fe().min(1,"validation").required("validation")}),Ve=()=>{const d=s=>{console.log(s)};return e.jsx("div",{style:{maxWidth:400},children:e.jsx(qe,{onSubmit:d,validationScheme:we,initialValues:{managers:[]},dataTestId:"multi-select-v2-form",children:e.jsxs(e.Fragment,{children:[e.jsx(Me,{name:"managers",As:s=>e.jsx(y,{...s,options:l,placeholder:"Search and select people",label:"label"})}),e.jsx(Ae,{buttonActionType:"submit",buttonText:"Save",className:"mt-16"})]})})})},V=Ve.bind({});var L,$,H;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(H=($=S.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var B,G,Q;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`(): React.ReactElement => {
  const [values, setValues] = useState<Record<string, TMultiSelectOption[]>>({
    small: [],
    medium: [],
    large: []
  });
  return <div style={{
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <_MultiSelectV2 key={size} size={size} label={size} options={OPTIONS} placeholder="Search and select people" selectedItems={values[size]} onAdd={item => setValues(prev => ({
      ...prev,
      [size]: [...prev[size], item]
    }))} onRemove={id => setValues(prev => ({
      ...prev,
      [size]: prev[size].filter(i => i.id !== id)
    }))} />)}
    </div>;
}`,...(Q=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var J,K,U;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(U=(K=b.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ie;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`args => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(() => args.selectedItems ?? []);
  const onAdd = (item: TMultiSelectOption) => setSelectedItems(prev => [...prev, item]);
  const onRemove = (id: string) => setSelectedItems(prev => prev.filter(item => item.id !== id));
  return <div style={{
    maxWidth: 400
  }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>;
}`,...(ie=(te=T.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,se,ne;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`(): React.ReactElement => {
  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return <div style={{
    maxWidth: 400
  }}>
      <FormContainer onSubmit={onSubmit} validationScheme={VALIDATION_SCHEME} initialValues={{
      managers: []
    }} dataTestId="multi-select-v2-form">
        <>
          <FormField name="managers" As={props => <_MultiSelectV2 {...props} options={OPTIONS} placeholder="Search and select people" label={'label'} />} />
          <Button buttonActionType="submit" buttonText="Save" className="mt-16" />
        </>
      </FormContainer>
    </div>;
}`,...(ne=(se=V.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const rt=["MultiSelectV2","Sizes","CustomDropdownWidth","RequiredWithError","Disabled","WithFormContainer"];export{b as CustomDropdownWidth,T as Disabled,S as MultiSelectV2,x as RequiredWithError,w as Sizes,V as WithFormContainer,rt as __namedExportsOrder,nt as default};
