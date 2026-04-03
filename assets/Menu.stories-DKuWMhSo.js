import{j as e}from"./jsx-runtime-B0cC0YjG.js";import{r as i}from"./iframe-ijS3vg12.js";import{M as C,N as I}from"./NestedMenu-vMmjEm5C.js";import{B as b}from"./Button-D26XtBwQ.js";import{I as y}from"./IconArrowDownloadFilled-ZFPEUAzG.js";import{I as g,a as h,b as x}from"./IconBeach-CE47H_Uc.js";import{I as M}from"./IconMore-CJf8IncM.js";import{I as O}from"./IconCheckmark-DW4S3zrV.js";import{I as n}from"./IconSettings-DqyqnMOl.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-B_uXsCwj.js";import"./index-D2lxLMQL.js";import"./Text-Mt6cUdKr.js";import"./helpers-Cg9a9Cp3.js";import"./index-AboGxAif.js";import"./types--FqFz6l0.js";import"./Popover-ChGAbmL6.js";import"./IconDismiss-DkULDUHs.js";import"./Link-C67Rpihe.js";import"./index-CikaM_CD.js";import"./CollapseGroup-DU0qU68z.js";import"./Divider-BEXXUIXi.js";import"./AnimatePresenceWrapper-C9FpJWJ_.js";import"./IconChevronDown-C5h1NMJk.js";import"./IconChevronUp-BLmeEYob.js";import"./IconChevronRight-DquWgQ83.js";import"./AvatarGroup-CXT28JwT.js";import"./DropzoneFileUpload-vyhyEgjY.js";import"./Label-kmD-K9sb.js";import"./useFormProps-DuUvd4cY.js";import"./ErrorMessage-xo5KB2tA.js";import"./IconDynamicComponent-BLnZaPZr.js";import"./Snackbar-Bq-FwR0r.js";import"./Alert-D-nNXIhG.js";import"./IconDismissFilled-CzWvA7PI.js";import"./Progress-CVDOsjJY.js";import"./IconAdd-CkXXGanN.js";import"./Checkbox-DxeNAPPO.js";import"./IconInfo-CGUIqtSD.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
