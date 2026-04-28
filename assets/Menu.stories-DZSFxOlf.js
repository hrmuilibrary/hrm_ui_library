import{j as e}from"./jsx-runtime-7fv8tTCu.js";import{r as i}from"./iframe-oEyWxzg1.js";import{M as C,N as I}from"./NestedMenu-B-PxUjtu.js";import{B as b}from"./Button-DCIifd0y.js";import{I as y}from"./IconArrowDownloadFilled-AoUtUtlQ.js";import{I as g,a as h,b as x}from"./IconBeach-Dn6XwdO7.js";import{I as M}from"./IconMore-BXhVvOJM.js";import{I as O}from"./IconCheckmark-pvUq4jT3.js";import{I as n}from"./IconSettings-DA_6Ykh1.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-_Zz-xtem.js";import"./index-t9KkYCCn.js";import"./Text-DJmOglTz.js";import"./helpers-ucB5S7R7.js";import"./index-AboGxAif.js";import"./types-C2SQmyRo.js";import"./index-BsrSMMhx.js";import"./Popover-wWKF_mxV.js";import"./IconDismiss-BsTCjBSz.js";import"./Link-DpXlMkSM.js";import"./CollapseGroup-D90ESKEP.js";import"./Divider-D7o2eEEt.js";import"./AnimatePresenceWrapper-2vKEIs8V.js";import"./IconChevronDown-Gx8YdzV_.js";import"./IconChevronUp-BkDJOeCk.js";import"./IconChevronRight-7SRJhN_-.js";import"./AvatarGroup-CQ_GLjJ3.js";import"./DropzoneFileUpload-CdrNngJG.js";import"./Label-CXxYW_mV.js";import"./useFormProps-CB6AZEiI.js";import"./ErrorMessage-9za0kocV.js";import"./IconDynamicComponent-BS7pgqm8.js";import"./Snackbar-CejxDGQg.js";import"./Alert-BX6OI66G.js";import"./IconDismissFilled-DmyBLJnu.js";import"./Progress-Cy3eQ-Q_.js";import"./IconAdd-Bo9tiKXs.js";import"./Checkbox-CA6xSOpQ.js";import"./IconInfo-B0BKhnjd.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
