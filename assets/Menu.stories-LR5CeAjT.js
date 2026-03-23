import{j as e}from"./jsx-runtime-Bbb5CGrR.js";import{r as i}from"./iframe-ngS_hadB.js";import{M as C,N as I}from"./NestedMenu-oNWn_eJb.js";import{B as b}from"./Button-QrgSjxTi.js";import{I as y}from"./IconArrowDownloadFilled-suUDXCEs.js";import{I as g,a as h,b as x}from"./IconBeach-CIfA3bul.js";import{I as M}from"./IconMore-BdEr0v9b.js";import{I as O}from"./IconCheckmark-TCFNvAy6.js";import{I as n}from"./IconSettings-BeZHlGpS.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DlFHHgNE.js";import"./index-Dqdq_jxa.js";import"./Text-CRAPLiD3.js";import"./helpers-DtYswuEc.js";import"./index-DYDl_GcV.js";import"./types-Bz-VumSl.js";import"./Popover-cSV0FLRk.js";import"./IconDismiss-CV9yiX_Y.js";import"./Link-D_YVZnhC.js";import"./index-BX6UAoJg.js";import"./CollapseGroup-DA9EjRsS.js";import"./Divider-CCbrXlUh.js";import"./AnimatePresenceWrapper-B_XdyFQI.js";import"./IconChevronDown-DVD5G2SD.js";import"./IconChevronUp-DHCvDI4A.js";import"./IconChevronRight-BKFYgC5q.js";import"./AvatarGroup-aIVXHhVn.js";import"./DropzoneFileUpload-1NM-j462.js";import"./Label-BKtYEcT4.js";import"./useFormProps-ChR1MLN1.js";import"./ErrorMessage-DqcoxZMK.js";import"./IconDynamicComponent-DbEHS7Oj.js";import"./Snackbar-CMOiZRyj.js";import"./Alert-B07b_zlz.js";import"./IconDismissFilled-BN9gBDB2.js";import"./Progress-B3svuPbV.js";import"./IconAdd-Kpyrq1V7.js";import"./Checkbox-BQ0wLWak.js";import"./IconInfo-DxSCVYBk.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
