import{j as e}from"./jsx-runtime-CngKgbe6.js";import{r as i}from"./iframe-Cz66miii.js";import{M as C,N as I}from"./NestedMenu-CmH54Oh9.js";import{B as b}from"./Button-OZu94O-G.js";import{I as y}from"./IconArrowDownloadFilled-CyBZC63Q.js";import{I as g,a as h,b as x}from"./IconBeach-BYGk9MNL.js";import{I as M}from"./IconMore-ImU3sKFP.js";import{I as O}from"./IconCheckmark-CucnadGB.js";import{I as n}from"./IconSettings-BBnJdwfJ.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-D6DTlN5i.js";import"./index-DSQl18Y3.js";import"./Text-BGEowCTX.js";import"./helpers-J1p4D3T7.js";import"./index-DYDl_GcV.js";import"./types-Bh1UU2xh.js";import"./Popover-Df-JaJu_.js";import"./IconDismiss-BvoGMAiU.js";import"./Link-DTqX9YlE.js";import"./index-DVgFluf-.js";import"./CollapseGroup-CcQHLEBN.js";import"./Divider-lb_4MKWL.js";import"./AnimatePresenceWrapper-CTpOgPg4.js";import"./IconChevronDown-D1JVevKo.js";import"./IconChevronUp-BBNqfNoC.js";import"./IconChevronRight-C9n8GjYD.js";import"./AvatarGroup-BWsBR20l.js";import"./DropzoneFileUpload-CyzGRrck.js";import"./Label-D4Jl0xFN.js";import"./useFormProps-CR2lrn_h.js";import"./ErrorMessage-Cltafpl0.js";import"./IconDynamicComponent-D_VxwX-p.js";import"./Snackbar-eEnRyKeb.js";import"./Alert-CoqWg55s.js";import"./IconDismissFilled-Cqvs6vFF.js";import"./Progress-C6GPG9lz.js";import"./IconAdd-BP2tEC_n.js";import"./Checkbox-BLWyfXay.js";import"./IconInfo-5E5C414h.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
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
