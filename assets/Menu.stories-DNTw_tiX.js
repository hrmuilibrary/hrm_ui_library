import{j as e}from"./jsx-runtime-C8sgSdL0.js";import{r as i}from"./iframe-DsH-SPzn.js";import{M as C,N as I}from"./NestedMenu-C3-F2Qy-.js";import{B as b}from"./Button-BCSyN4Bt.js";import{I as y}from"./IconArrowDownloadFilled-B37fywS8.js";import{I as g,a as h,b as x}from"./IconBeach-C3to_ilH.js";import{I as M}from"./IconMore-D352ixgx.js";import{I as O}from"./IconCheckmark-C6P27By3.js";import{I as n}from"./IconSettings-nuIlR-5X.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DN9r8x2b.js";import"./index-BC3c56jS.js";import"./Text-D_7Coc_Y.js";import"./helpers-Dv8ujeJH.js";import"./index-DYDl_GcV.js";import"./types-CQEiptzx.js";import"./ModalConfirmation-CoMDJR1i.js";import"./AnimatePresenceWrapper-CnmRckcy.js";import"./IconDismiss-I4TQh8L-.js";import"./index-e6VgsW-l.js";import"./CollapseGroup-JcXh-OXp.js";import"./Divider-Cn1D85IK.js";import"./IconChevronDown-ToaUJpz-.js";import"./IconChevronUp-Ey5sdtXi.js";import"./IconChevronRight-Bn37N-po.js";import"./AvatarGroup-5UFuk7jH.js";import"./DropzoneFileUpload-Cu05bF11.js";import"./Label-Dudw98xF.js";import"./useFormProps-RO7dRWLL.js";import"./ErrorMessage-D5gQiOf-.js";import"./IconDynamicComponent-C42rKCUY.js";import"./IconDelete-DpA-J6JQ.js";import"./Snackbar-BGbdEl1W.js";import"./Alert-BUf0kuj5.js";import"./IconDismissFilled-BLmTqsbs.js";import"./Progress-C_QJfzr6.js";import"./IconAdd-Wyj9hhyZ.js";import"./Checkbox-CAj4XaDC.js";import"./Popover-BNm6DqpC.js";import"./Link-D8jSWKLa.js";import"./IconInfo-CfskD1sJ.js";const Ce={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:1,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const be=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,be as __namedExportsOrder,Ce as default};
